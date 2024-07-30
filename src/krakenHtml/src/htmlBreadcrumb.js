import { ClassBase } from "./ClassBase.js";

import { htmlUrl } from "./htmlUrl.js";

export class HtmlBreadcrumbClass extends ClassBase {
  constructor(records, request) {
    super(records, request);
  }

  get content() {
    return _getBreadcrumb(this.record);
  }
}

export function htmlBreadcrumb(record) {
  return _getBreadcrumb(record);
}

function _getBreadcrumb(record) {
  
  let listItems = record?.itemListElement;

  listItems = ensureArray(listItems);

  listItems = listItems.sort((a, b) => a.position - b.position);

  let parts = "";
  let newBreadCrumbItems = [];
  for (let listItem of listItems) {
    
    let item = listItem.item;

    // Define new breadcrumbs
    let newBreadcrumb = JSON.parse(JSON.stringify(item));
    newBreadcrumb.itemListElement = JSON.parse(JSON.stringify(newBreadCrumbItems));
    newBreadCrumbItems.push(listItem);

   
    let options = {
      basePath: item?.url,
      params: {
        breadcrumb: JSON.stringify(newBreadcrumb),
      },
    };

    let url = htmlUrl(options);

    parts += `<li class="breadcrumb-item"><a href="${url}">${item.name}</a></li>`;
  }

  let content = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
       ${parts}
      </ol>
    </nav>`;

  return content;
}

function ensureArray(value) {
  if (Array.isArray(value)) {
    return value;
  } else {
    return [value];
  }
}
