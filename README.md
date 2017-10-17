# React Visible Images
Load images only when they appear on the page

## Requirements
- React

## Installation
```
npm install react-visible-image --save-dev
```

```
import { BackgroundImage, Image } from `react-visible-image`

class App extends React.Component {
    render() {
        return (
            <div>
                // Only loads this image when the user scrolls to it
                <Image image="path/to/image.jpg" />

                // Will only apply the style.backgroundImage when user scrolls to it
                <BackgroundImage
                    tagType="section"
                    className="background-image"
                    image="path/to/image.jpg)"
                >
                    <p>Content</p>
                </BackgroundImage>
            </div>
        )
    }
}
```

## Browser Support

### Supported
- Chrome 50+
- Firefox 55+
- Edge 15+
- Opera 47+

### Unsupported
- Internet Explorer
- \*Safari (includes iOS)

\*In development as of October 2017

## Testing
_Coming soon_

## Options


### Global

- `shouldShow`
Overrides the internal state of `BackgroundImage|Image`. If set to `true`, the image will always show. If set to `false`, either the `initialImage` will show or nothing will.

- `loadingClassName`
Specifies a class to apply to the `BackgroundImage|Image` before the image has loaded

- `initialImage`
An image to use before the image appears on screen. Useful for animation and search engine purposes.

### BackgroundImage
`BackgroundImage` can be used as a wrapper to contain children elements

- `tagType`
An element or HTML tag to use as the `BackgroundImage` HTML tag