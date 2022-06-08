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

export const Strengths = {
    0: "Barely Detected",
    1: "Weak",
    2: "Moderate",
    3: "Strong",
    4: "Very Strong",
    5: "Extreme"
};

export interface sTemplate {
    code: number,
    name: string
}

export const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
export const EXCEL_EXTENSION = ".xlsx";
export const PDF_EXTENSION = ".pdf";