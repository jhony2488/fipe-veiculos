export const updateData = (currentObject: any, newDataObject: any) => {
    const currentObjectGet: any = currentObject;
    const keys: string[] = Object.keys(currentObject).map((key, value) => key);

    keys.map((value, key) => {
        currentObjectGet[value] = newDataObject[value] ? newDataObject[value] : currentObjectGet[value] ;
    })
    return currentObjectGet;
}