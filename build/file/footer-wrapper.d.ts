/// <reference types="node" />
import { IMediaData } from "../file/media";
import { XmlComponent } from "../file/xml-components";
import { FooterReferenceType } from "./document";
import { Footer } from "./footer/footer";
import { Image, Media } from "./media";
import { Paragraph } from "./paragraph";
import { Relationships } from "./relationships";
import { Table } from "./table";
export interface IDocumentFooter {
    footer: FooterWrapper;
    type: FooterReferenceType;
}
export declare class FooterWrapper {
    private readonly footer;
    private readonly relationships;
    private readonly media;
    constructor(referenceId: number, initContent?: XmlComponent);
    addParagraph(paragraph: Paragraph): void;
    createParagraph(text?: string): Paragraph;
    addTable(table: Table): void;
    createTable(rows: number, cols: number): Table;
    addChildElement(childElement: XmlComponent): void;
    addImageRelationship(image: Buffer, refId: number, width?: number, height?: number): IMediaData;
    addHyperlinkRelationship(target: string, refId: number, targetMode?: "External" | undefined): void;
    createImage(image: Buffer, width?: number, height?: number): void;
    addImage(image: Image): FooterWrapper;
    readonly Footer: Footer;
    readonly Relationships: Relationships;
    readonly Media: Media;
}
