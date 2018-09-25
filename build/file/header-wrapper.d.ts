/// <reference types="node" />
import { IMediaData } from "../file/media";
import { XmlComponent } from "../file/xml-components";
import { HeaderReferenceType } from "./document";
import { Header } from "./header/header";
import { Image, Media } from "./media";
import { Paragraph } from "./paragraph";
import { Relationships } from "./relationships";
import { Table } from "./table";
export interface IDocumentHeader {
    header: HeaderWrapper;
    type: HeaderReferenceType;
}
export declare class HeaderWrapper {
    private readonly header;
    private readonly relationships;
    private readonly media;
    constructor(referenceId: number, initContent?: XmlComponent);
    addParagraph(paragraph: Paragraph): void;
    createParagraph(text?: string): Paragraph;
    addTable(table: Table): void;
    createTable(rows: number, cols: number): Table;
    addChildElement(childElement: XmlComponent | string): void;
    addImageRelationship(image: Buffer, refId: number, width?: number, height?: number): IMediaData;
    createImage(image: Buffer, width?: number, height?: number): void;
    addImage(image: Image): HeaderWrapper;
    readonly Header: Header;
    readonly Relationships: Relationships;
    readonly Media: Media;
}
