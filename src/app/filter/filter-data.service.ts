import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map, mapTo } from "rxjs/operators";
import { schema, normalize } from "normalizr";

import { normalizeDataFn } from "./normalize";

import { filterData } from "./data";

@Injectable()
export class FilterDataService {
  constructor() {}
  getFilterData() {
    return of<any>(filterData).pipe(map(data => normalizeDataFn(data)));
  }
}
