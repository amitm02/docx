import { XmlComponent } from "../../../../file/xml-components";
import { FooterWrapper } from "../../../footer-wrapper";
import { HeaderWrapper } from "../../../header-wrapper";
import { IPageBordersOptions, IPageNumberTypeAttributes } from "./";
import { IColumnsAttributes } from "./columns/columns-attributes";
import { IDocGridAttributesProperties } from "./doc-grid/doc-grid-attributes";
import { IPageMarginAttributes } from "./page-margin/page-margin-attributes";
import { IPageSizeAttributes } from "./page-size/page-size-attributes";
export interface IHeaderFooterGroup<T> {
    default?: T;
    first?: T;
    even?: T;
}
interface IHeadersOptions {
    headers?: IHeaderFooterGroup<HeaderWrapper>;
}
interface IFootersOptions {
    footers?: IHeaderFooterGroup<FooterWrapper>;
}
interface ITitlePageOptions {
    titlePage?: boolean;
}
export declare type SectionPropertiesOptions = IPageSizeAttributes & IPageMarginAttributes & IColumnsAttributes & IDocGridAttributesProperties & IHeadersOptions & IFootersOptions & IPageNumberTypeAttributes & IPageBordersOptions & ITitlePageOptions;
export declare class SectionProperties extends XmlComponent {
    private readonly options;
    constructor(options?: SectionPropertiesOptions);
    private addHeaders;
    private addFooters;
    readonly Options: SectionPropertiesOptions;
}
export {};
