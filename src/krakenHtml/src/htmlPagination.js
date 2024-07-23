export class HtmlPaginationClass {
    constructor(records) {
        this._records = records;
        this.query = null;
        this.limit = 20;
        this.offset = 0;
        this.orderBy = "createdDate";
        this.orderDirection = -1;
        this.potentialActions = null;
        this.baseUrl = null;
        this.path = null
        this.maxNo = null;
    }

    get baseUrl() {
        return this._baseUrl;
    }

    set baseUrl(value) {
        this._baseUrl = value;
    }

    get records() {
        return this._records;
    }
    set records(value) {
        this._records = value;
    }

    set request(req) {
        this.query = req.query["query"] || req.query["q"];
        this.offset = req.query["offset"] || req.query["o"];
        this.limit = req.query["limit"] || req.query["l"];
        this.orderBy = req.query["orderBy"] || req.query["order"];
        this.orderDirection =
            req.query["orderDirection"] || req.query["direction"];

        let PORT = "";
        const protocol = req.protocol;
        const host = req.hostname;
        const url = ""; //req.originalUrl;
        const port = process.env.PORT || PORT;
        this.baseUrl = `${protocol}://${host}`;
        
    }

    get content() {
        return _getPagination(
            this.baseUrl + this.path,
            this.query,
            this.offset,
            this.limit,
            this.orderBy,
            this.orderDirection,
            this.maxNo,
        );
    }
}

export function htmlPagination(
    baseUrl,
    query,
    offset,
    limit,
    orderBy,
    orderDirection,
    maxNo,
) {
    return _getPagination(
        baseUrl,
        query,
        offset,
        limit,
        orderBy,
        orderDirection,
        maxNo,
    );
}

function _getPagination(
    baseUrl,
    query,
    offset,
    limit,
    orderBy,
    orderDirection,
    maxNo,
) {
    offset = Number(offset) || 0;
    limit = Number(limit) || 20;

    let NoOfItems = 5;

    let content = ``;

    let startNo = offset - Math.floor(NoOfItems / 2) * limit;

    if (maxNo && maxNo != null) {
        if (startNo + (NoOfItems - 1) * limit > maxNo) {
            startNo =
                (Math.floor(maxNo / limit) + 1) * limit - NoOfItems * limit;
        }
    }

    if (startNo < 0) {
        startNo = 0;
    }

    let items = ``;
    items += _getLine(
        "Previous",
        baseUrl,
        query,
        offset - limit,
        limit,
        orderBy,
        orderDirection,
    );

    for (let x = 0; x < NoOfItems; x++) {
        let recordNo = startNo + x * limit;
        let pageNumber = Math.floor((startNo + x * limit) / limit) + 1;

        if (!maxNo || maxNo == null || recordNo < maxNo) {
            items += _getLine(
                pageNumber,
                baseUrl,
                query,
                recordNo,
                limit,
                orderBy,
                orderDirection,
            );
        }
    }

    items += _getLine(
        "Next",
        baseUrl,
        query,
        offset + limit,
        limit,
        orderBy,
        orderDirection,
    );

    content += `
     <nav aria-label="Navigation">
          <ul class="pagination justify-content-center">
            ${items}
          </ul>
        </nav>`;

    return content;
}

function _getLine(
    caption,
    baseUrl,
    query,
    offset,
    limit,
    orderBy,
    orderDirection,
) {
    let url = new URL(baseUrl);
    let params = url.searchParams;

    if (query && query != null) {
        params.append("query", query);
    }
    if (offset && offset != null) {
        params.append("offset", offset);
    }
    if (limit && limit != null) {
        params.append("limit", limit);
    }
    if (orderBy && orderBy != null) {
        params.append("orderBy", orderBy);
    }
    if (orderDirection && orderDirection != null) {
        params.append("orderDirection", orderDirection);
    }

    // disable condition
    let isDisabled = "";
    if (offset < 0) {
        isDisabled = "disabled";
    }

    let item = `<li class="page-item ${isDisabled}">
      <a href="${url.toString()}" class="page-link">${caption}</a>
    </li>`;

    return item;
}
