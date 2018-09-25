import { IXmlableObject, XmlComponent } from ".";
export declare const parseOptions: {
    ignoreAttributes: boolean;
    attributeNamePrefix: string;
    attrNodeName: string;
};
export declare function convertToXmlComponent(elementName: string, element: any): ImportedXmlComponent | ImportedXmlComponent[];
export declare class ImportedXmlComponent extends XmlComponent {
    static fromXmlString(importedContent: string): ImportedXmlComponent;
    private readonly _attr;
    constructor(rootKey: string, _attr?: any);
    prepForXml(): IXmlableObject | undefined;
    push(xmlComponent: XmlComponent): void;
}
export declare class ImportedRootElementAttributes extends XmlComponent {
    private readonly _attr;
    constructor(_attr: any);
    prepForXml(): IXmlableObject;
}
