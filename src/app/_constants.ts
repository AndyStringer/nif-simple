export const States = {
    inject: 0,
    start: 1,
    stop: 2
};

export interface oTemplate {
    name: string;
};

export const Odors = [
    {name: "Citrus"},
    {name: "Woody"},
    {name: "Fruity"},
    {name: "Floral"},
    {name: "Sweet"},
    {name: "Other"}
];

export const Strengths = [
    {name: "Barely Detected", code: 0},
    {name: "Weak", code: 1},
    {name: "Moderate", code: 2},
    {name: "Strong", code: 3},
    {name: "Very Strong", code: 4},
    {name: "Extreme", code: 5}
];

export interface sTemplate {
    name: string,
    code: number
}

export const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
export const EXCEL_EXTENSION = ".xlsx";
export const PDF_EXTENSION = ".pdf";