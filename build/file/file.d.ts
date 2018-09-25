/// <reference types="node" />
import { AppProperties } from "./app-properties/app-properties";
import { ContentTypes } from "./content-types/content-types";
import { CoreProperties, IPropertiesOptions } from "./core-properties";
import { Document } from "./document";
import { FooterReferenceType, HeaderReferenceType, SectionPropertiesOptions } from "./document/body/section-properties";
import { IFileProperties } from "./file-properties";
import { FooterWrapper } from "./footer-wrapper";
import { FootNotes } from "./footnotes";
import { HeaderWrapper } from "./header-wrapper";
import { Image, Media } from "./media";
import { Numbering } from "./numbering";
import { Bookmark, Hyperlink, Paragraph } from "./paragraph";
import { Relationships } from "./relationships";
import { Styles } from "./styles";
import { Table } from "./table";
export declare class File {
    private currentRelationshipId;
    private readonly document;
    private readonly headers;
    private readonly footers;
    private readonly docRelationships;
    private readonly coreProperties;
    private readonly numbering;
    private readonly media;
    private readonly fileRelationships;
    private readonly footNotes;
    private readonly contentTypes;
    private readonly appProperties;
    private styles;
    constructor(options?: IPropertiesOptions, sectionPropertiesOptions?: SectionPropertiesOptions, fileProperties?: IFileProperties);
    addParagraph(paragraph: Paragraph): File;
    createParagraph(text?: string): Paragraph;
    addTable(table: Table): void;
    createTable(rows: number, cols: number): Table;
    addImage(image: Image): File;
    createImage(buffer: Buffer | string | Uint8Array | ArrayBuffer, width?: number, height?: number): Image;
    createHyperlink(link: string, text?: string): Hyperlink;
    createInternalHyperLink(anchor: string, text?: string): Hyperlink;
    createBookmark(name: string, text?: string): Bookmark;
    addSection(sectionPropertiesOptions: SectionPropertiesOptions): void;
    createFootnote(paragraph: Paragraph): void;
    createHeader(): HeaderWrapper;
    createFooter(): FooterWrapper;
    createFirstPageHeader(): HeaderWrapper;
    getFooterByReferenceNumber(refId: number): FooterWrapper;
    getHeaderByReferenceNumber(refId: number): HeaderWrapper;
    protected addHeaderToDocument(header: HeaderWrapper, type?: HeaderReferenceType): void;
    protected addFooterToDocument(footer: FooterWrapper, type?: FooterReferenceType): void;
    protected addDefaultRelationships(): void;
    readonly Document: Document;
    Styles: Styles;
    readonly CoreProperties: CoreProperties;
    readonly Numbering: Numbering;
    readonly Media: Media;
    readonly DocumentRelationships: Relationships;
    readonly FileRelationships: Relationships;
    readonly Header: HeaderWrapper;
    readonly Headers: HeaderWrapper[];
    readonly Footer: FooterWrapper;
    readonly Footers: FooterWrapper[];
    readonly ContentTypes: ContentTypes;
    readonly AppProperties: AppProperties;
    readonly FootNotes: FootNotes;
}
