/// <reference types="react" />
import { Base, BaseProps } from './base';
export interface BackgroundImageProps extends BaseProps {
    tagType?: any;
    style?: object;
    children?: any;
}
export declare class BackgroundImage extends Base<BackgroundImageProps> {
    render(): JSX.Element;
}