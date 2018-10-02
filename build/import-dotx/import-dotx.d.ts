/// <reference types="node" />
import * as JSZip from "jszip";
import { FooterReferenceType } from "../file/document/body/section-properties/footer-reference";
import { HeaderReferenceType } from "../file/document/body/section-properties/header-reference";
import { FooterWrapper, IDocumentFooter } from "../file/footer-wrapper";
import { HeaderWrapper, IDocumentHeader } from "../file/header-wrapper";
import { Styles } from "../file/styles";
interface IDocumentRefs {
    headers: Array<{
        id: number;
        type: HeaderReferenceType;
    }>;
    footers: Array<{
        id: number;
        type: FooterReferenceType;
    }>;
}
interface IRelationshipFileInfo {
    id: number;
    target: string;
    type: "header" | "footer" | "image" | "hyperlink";
}
export interface IDocumentTemplate {
    currentRelationshipId: number;
    headers: IDocumentHeader[];
    footers: IDocumentFooter[];
    styles: Styles;
    titlePageIsDefined: boolean;
}
export declare class ImportDotx {
    private currentRelationshipId;
    constructor();
    extract(data: Buffer): Promise<IDocumentTemplate>;
    addRelationToWrapper(relationFile: IRelationshipFileInfo, zipContent: JSZip, wrapper: HeaderWrapper | FooterWrapper): Promise<void>;
    findReferenceFiles(xmlData: string): IRelationshipFileInfo[];
    extractDocumentRefs(xmlData: string): IDocumentRefs;
    titlePageIsDefined(xmlData: string): boolean;
    parseRefId(str: string): number;
}
export {};
