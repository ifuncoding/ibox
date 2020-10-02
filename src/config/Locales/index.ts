export default {
    'en-US': require('./en-US.json'),
    'vi-VN': require('./vi-VN.json'),
};

export interface ILanguages {
    id: string,
    name: string,
}

export const locales: ILanguages[] = [
    {id: 'en-US', name: 'English'},
    {id: 'vi-VN', name: 'Vietnamese'},
];
