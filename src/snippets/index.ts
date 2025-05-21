import { parse } from 'date-fns';
export { createDate };

/**
 * Creates a date object from a string
 * @param stringToParse - The string to parse in format dd-MM-yyyy
 * @returns The date object
 */
const createDate = (stringToParse: string) => parse(stringToParse, 'dd-MM-yyyy', new Date());

