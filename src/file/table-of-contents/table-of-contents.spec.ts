import { expect } from "chai";

import { Formatter } from "../../export/formatter";
import { ITableOfContentsOptions, StyleLevel, TableOfContents } from "./";

describe("Table of Contents", () => {
    describe("#constructor", () => {
        it("should construct a TOC without options", () => {
            const toc = new TableOfContents();
            const tree = new Formatter().format(toc);
            expect(tree).to.be.deep.equal(DEFAULT_TOC);
        });

        it("should construct a TOC with all the options and alias", () => {
            const props: ITableOfContentsOptions = {};

            props.captionLabel = "A";
            props.entriesFromBookmark = "B";
            props.captionLabelIncludingNumbers = "C";
            props.sequenceAndPageNumbersSeparator = "D";
            props.tcFieldIdentifier = "F";
            props.hyperlink = true;
            props.tcFieldLevelRange = "L";
            props.pageNumbersEntryLevelsRange = "N";
            props.headingStyleRange = "O";
            props.entryAndPageNumberSeparator = "P";
            props.seqFieldIdentifierForPrefix = "S";

            const styles = new Array<StyleLevel>();
            styles.push(new StyleLevel("SL", 1));
            styles.push(new StyleLevel("SL", 2));
            props.stylesWithLevels = styles;
            props.useAppliedParagraphOutlineLevel = true;
            props.preserveTabInEntries = true;
            props.preserveNewLineInEntries = true;
            props.hideTabAndPageNumbersInWebView = true;

            const toc = new TableOfContents("Summary", props);
            const tree = new Formatter().format(toc);
            expect(tree).to.be.deep.equal(COMPLETE_TOC);
        });
    });
});

const DEFAULT_TOC = {
    "w:sdt": [
        {
            "w:sdtPr": [
                {
                    "w:alias": [
                        {
                            _attr: {
                                "w:val": "Table of Contents",
                            },
                        },
                    ],
                },
            ],
        },
        {
            "w:sdtContent": [
                {
                    "w:p": [
                        {
                            "w:pPr": [],
                        },
                        {
                            "w:r": [
                                {
                                    "w:rPr": [],
                                },
                                {
                                    "w:fldChar": [
                                        {
                                            _attr: {
                                                "w:fldCharType": "begin",
                                                "w:dirty": true,
                                            },
                                        },
                                    ],
                                },
                                {
                                    "w:instrText": [
                                        {
                                            _attr: {
                                                "xml:space": "preserve",
                                            },
                                        },
                                        "TOC",
                                    ],
                                },
                                {
                                    "w:fldChar": [
                                        {
                                            _attr: {
                                                "w:fldCharType": "separate",
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    "w:p": [
                        {
                            "w:pPr": [],
                        },
                        {
                            "w:r": [
                                {
                                    "w:rPr": [],
                                },
                                {
                                    "w:fldChar": [
                                        {
                                            _attr: {
                                                "w:fldCharType": "end",
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

const COMPLETE_TOC = {
    "w:sdt": [
        {
            "w:sdtPr": [
                {
                    "w:alias": [
                        {
                            _attr: {
                                "w:val": "Summary",
                            },
                        },
                    ],
                },
            ],
        },
        {
            "w:sdtContent": [
                {
                    "w:p": [
                        {
                            "w:pPr": [],
                        },
                        {
                            "w:r": [
                                {
                                    "w:rPr": [],
                                },
                                {
                                    "w:fldChar": [
                                        {
                                            _attr: {
                                                "w:fldCharType": "begin",
                                                "w:dirty": true,
                                            },
                                        },
                                    ],
                                },
                                {
                                    "w:instrText": [
                                        {
                                            _attr: {
                                                "xml:space": "preserve",
                                            },
                                        },
                                        'TOC \\a "A" \\b "B" \\c "C" \\d "D" \\f "F" \\h \\l "L \\n "N \\o "O \\p "P \\s "S \\t "SL,1,SL,2" \\u \\w \\x \\z',
                                    ],
                                },
                                {
                                    "w:fldChar": [
                                        {
                                            _attr: {
                                                "w:fldCharType": "separate",
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    "w:p": [
                        {
                            "w:pPr": [],
                        },
                        {
                            "w:r": [
                                {
                                    "w:rPr": [],
                                },
                                {
                                    "w:fldChar": [
                                        {
                                            _attr: {
                                                "w:fldCharType": "end",
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
