import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'iidle',
    sections: [
        {
            image: 'image-transform.jpg',
            alt: 'egg',
            title: 'Transform your brand',
            description: `
                    We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:
            `,
        },
        {
            image: 'image-stand-out.jpg',
            alt: 'pink drink',
            title: 'Stand out to the right audience',
            description: `
                    We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:
            `,
        }
    ]
}

export const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {}
})
export const sectionList = (state) => state.sections.sections;
export default sectionSlice.reducer;
