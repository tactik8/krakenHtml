import { formBaseElements } from "./baseElements/formBaseElements.js";

import { formBlocks } from "./blocks/formBlocks.js";

export const htmlForm = {
  base: formBaseElements,
  blocks: formBlocks,
  json: formBlocks.json,
  generic: formBlocks.generic,
  form: _htmlForm,
};

export function _htmlForm(schema, record) {
  return _getForm(schema, record);
}

function _getForm(schema, record, title = "") {
  /**
 * Form Structure
        krForm
        - krFormHeader
        - krFormBody
          - krFormInputElement
            - krFormInputPropertySection
            - krFormInputValueSection
              - krFormInputValueElement (many)
                - krFormInputValuePositionSection
                  - krFormInputValuePositionField
                - krFormInputValueFieldSection
                - krFormInputValueActionSection
            - krFormInputActionSection
        - krFormFooter


 */

  // Get property and values
  let propertyContent = _getFormObject(schema, record);

  // Get form
  let content = getFormBody(title, propertyContent);

  return content;
}

function _getFormObject(schema, record) {
  // Get property and values
  let propertyElements = [];
  for (let propertyID in schema.properties) {
    let propertySchema = schema.properties[propertyID];
    let values = record?.[propertyID] || null;

    values = ensureArray(values);

    // Get value Elements
    let valueElements = [];
    let position = 1;
    for (let value of values) {
      let formValueInput = getFormValueInput(propertyID, propertySchema, value);
      valueElements.push(
        getFormValueElement(propertyID, position, formValueInput),
      );
      position += 1;
    }

    // Get template
    let templateValueInput = getFormValueInput(
      propertyID,
      propertySchema,
      null,
    );
    let template = getFormValueElement(propertyID, 0, templateValueInput);

    // Get property Element
    let propertyElement = getFormPropertySection(
      propertyID,
      valueElements.join(" "),
      template,
    );
    propertyElements.push(propertyElement);
  }

  return propertyElements.join(" ");
}

function getFormValueInput(propertyID, propertySchema, htmlType, value) {
  if (propertySchema.type == "array") {
    propertySchema = propertySchema.items;
  }

  if (propertySchema.type == "object") {
    return _getFormObject(propertySchema, value);
  }

  htmlType = htmlType || 'text'
  
  let inputID = propertyID
  return formBaseElements.get(
    propertyID,
    inputID,
    value,
    htmlType,
    propertySchema?.choices,
    propertySchema?.choices,
  );
}

function getFormValueElement(propertyID, position, formValueInput) {
  let content = `

      <div class="d-flex krFormInputValueElement" data-propertyID="${propertyID}">

        <div class=" p-1 krFormInputValuePositionSection">
          <span class="krFormInputValuePositionField">
            ${position}
          </span>
        </div>

        <div class=" flex-grow-1 p-1 krFormInputValueFieldSection">
          ${formValueInput}

        </div>
        
        <div class="hide p-1 krFormInputValueActionSection text-end">
          <span class="m-2" onclick="
              let krFormInputValueElement=this.closest('.krFormInputValueElement');
              krFormInputValueElement.remove(); 
            ">
            ${_getMinusSvg()}
          </span>
        </div>

      </div>


    `;

  return content;
}

function getFormPropertySection(propertyID, propertyContent, template) {
  let templateID = String(crypto.randomUUID());
  let content = `


        <div class="row krFormInputElement" data-propertyID="${propertyID}">

            <div class="col col-12 col-md-4">
                <div class="krFormInputPropertySection">
                    <label for="${propertyID}" class="form-label">
                      ${propertyID}
                    </label>
                </div>
                </div>

                <div class="col col-12 col-md-8 krFormInputValueSection">
                <div class="krFormInputValueSection">
                    ${propertyContent}
                </div>
            </div>




            <div class="hide krFormInputActionSection p-1 text-end">

              <span class="p-2 p-2">
                <span class="p-2" onclick="console.log('click');
                      let inputElement=this.closest('.krFormInputElement');
                      console.log('inputElement', inputElement.getAttribute('data-propertyID'));
                      let templateElement = document.getElementById('${templateID}');
                      console.log('template', templateElement.getAttribute('data-propertyID'));
                      let temp = document.createElement('div');
                      temp.innerHTML = templateElement.innerHTML;
                      let valueSection = inputElement.querySelector('.krFormInputValueSection');
                      let position = valueSection.children.length + 1
                      let p = temp.querySelector('.krFormInputValuePositionField');
                      p.textContent = String(position);
                      valueSection.appendChild(temp);

                      ">
                  ${_getPlusSvg()}
                </span>
              </span>


            </div>


            <div style="display:none" class="krFormInputTemplateSection" id="${templateID}" data-propertyID="${propertyID}">

              ${template}

            </div>




        </div>
    `;
  return content;
}

function getFormBody(title, propertyElements) {
  let content = `

    <div class="krForm border">


      <form>
        <div class="krFormHeader">

          <span class="formTitle">
            ${title}
          </span>

        </div>

        <div class="krFormBody">

          <!-- Input element start -->
          <div class="row krFormInputContainer">

           ${propertyElements}
          </div>



        </div>

        <div class="krFormFooter">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>

      </form>

    </div>


    `;

  return content;
}

function ensureArray(value) {
  if (Array.isArray(value)) {
    return value;
  } else {
    return [value];
  }
}

function _getPlusSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>`;
}

function _getMinusSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`;
}
