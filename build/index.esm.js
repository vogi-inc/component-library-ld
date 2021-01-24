import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: 8%;\n  padding: ", ";\n"], ["\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: 8%;\n  padding: ", ";\n"])), function (_a) {
    var textColor = _a.textColor;
    return textColor;
}, function (_a) {
    var buttonColor = _a.buttonColor;
    return buttonColor;
}, function (_a) {
    var border = _a.border;
    return border || "none";
}, function (_a) {
    var padding = _a.padding;
    return padding || "0.5em 1em";
});
var templateObject_1;

var Flex = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  align-content: ", ";\n  align-items: ", ";\n  align-self: ", ";\n  display: flex;\n  flex-direction: ", ";\n  flex-flow: ", ";\n  flex-wrap: ", ";\n  height: ", ";\n  justify-content: ", ";\n  position: ", ";\n  width: ", ";\n  z-index: ", ";\n"], ["\n  align-content: ", ";\n  align-items: ", ";\n  align-self: ", ";\n  display: flex;\n  flex-direction: ", ";\n  flex-flow: ", ";\n  flex-wrap: ", ";\n  height: ", ";\n  justify-content: ", ";\n  position: ", ";\n  width: ", ";\n  z-index: ", ";\n"])), function (_a) {
    var alignContent = _a.alignContent;
    return alignContent || "normal";
}, function (_a) {
    var alignItems = _a.alignItems;
    return alignItems || "flex-start";
}, function (_a) {
    var alignSelf = _a.alignSelf;
    return alignSelf || "auto";
}, function (_a) {
    var flexDirection = _a.flexDirection;
    return flexDirection || "row";
}, function (_a) {
    var flexFlow = _a.flexFlow;
    return flexFlow || "row nowrap";
}, function (_a) {
    var flexWrap = _a.flexWrap;
    return flexWrap || "inherit";
}, function (_a) {
    var height = _a.height;
    return height || "auto";
}, function (_a) {
    var justifyContent = _a.justifyContent;
    return justifyContent || "flex-start";
}, function (_a) {
    var position = _a.position;
    return position || "relative";
}, function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex || "auto";
});
Flex.displayName = "Flex";
var FlexItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-self: ", ";\n  flex-basis: ", ";\n  flex-grow: ", ";\n  flex-shrink: ", ";\n  order: ", ";\n"], ["\n  align-self: ", ";\n  flex-basis: ", ";\n  flex-grow: ", ";\n  flex-shrink: ", ";\n  order: ", ";\n"])), function (_a) {
    var alignSelf = _a.alignSelf;
    return alignSelf || "flex-start";
}, function (_a) {
    var flexBasis = _a.flexBasis;
    return flexBasis || "auto";
}, function (_a) {
    var flexGrow = _a.flexGrow;
    return flexGrow || 0;
}, function (_a) {
    var flexShrink = _a.flexShrink;
    return flexShrink || 1;
}, function (_a) {
    var order = _a.order;
    return order || 0;
});
var defaultExport = Object.assign(Flex, { Item: FlexItem });
var templateObject_1$1, templateObject_2;

var Grid = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: grid;\n  width: ", ";\n  line-height: ", ";\n  height: ", ";\n  grid-template-rows: ", ";\n  grid-template-columns: ", ";\n  gap: ", ";\n  justify-items: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  align-content: ", ";\n  position: ", ";\n  background: ", ";\n  color: ", ";\n  z-index: ", ";\n  user-select: ", ";\n"], ["\n  display: grid;\n  width: ", ";\n  line-height: ", ";\n  height: ", ";\n  grid-template-rows: ", ";\n  grid-template-columns: ",
    ";\n  gap: ",
    ";\n  justify-items: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  align-content: ", ";\n  position: ", ";\n  background: ", ";\n  color: ", ";\n  z-index: ", ";\n  user-select: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight || "initial";
}, function (_a) {
    var height = _a.height;
    return height || "auto";
}, function (_a) {
    var gridTemplateRows = _a.gridTemplateRows;
    return gridTemplateRows || "100%";
}, function (_a) {
    var gridTemplateColumns = _a.gridTemplateColumns;
    return gridTemplateColumns || "100%";
}, function (_a) {
    var gap = _a.gap, gridColumnGap = _a.gridColumnGap, gridRowGap = _a.gridRowGap;
    return gap ? gap : (gridRowGap || 0) + " " + (gridColumnGap || 0);
}, function (_a) {
    var justifyItems = _a.justifyItems;
    return justifyItems || "center";
}, function (_a) {
    var alignItems = _a.alignItems;
    return alignItems || "center";
}, function (_a) {
    var justifyContent = _a.justifyContent;
    return justifyContent || "start";
}, function (_a) {
    var alignContent = _a.alignContent;
    return alignContent || "start";
}, function (_a) {
    var position = _a.position;
    return position || "relative";
}, function (_a) {
    var background = _a.background;
    return background || "initial";
}, function (_a) {
    var color = _a.color;
    return color || "inherit";
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex || "auto";
}, function (_a) {
    var userSelect = _a.userSelect;
    return userSelect || "auto";
});
Grid.displayName = "Grid";
var GridItem = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  align-items: ", ";\n  align-self: ", ";\n  display: ", ";\n  grid-column: ", ";\n  grid-row: ", ";\n  height: ", ";\n  justify-content: ", ";\n  justify-self: ", ";\n  position: ", ";\n  width: ", ";\n  z-index: ", ";\n"], ["\n  align-items: ", ";\n  align-self: ", ";\n  display: ", ";\n  grid-column: ", ";\n  grid-row: ", ";\n  height: ", ";\n  justify-content: ", ";\n  justify-self: ", ";\n  position: ", ";\n  width: ", ";\n  z-index: ", ";\n"])), function (_a) {
    var alignItems = _a.alignItems;
    return alignItems || "center";
}, function (_a) {
    var alignSelf = _a.alignSelf;
    return alignSelf || "center";
}, function (_a) {
    var display = _a.display;
    return display;
}, function (_a) {
    var gridColumn = _a.gridColumn;
    return gridColumn || "auto / auto";
}, function (_a) {
    var gridRow = _a.gridRow;
    return gridRow || "auto / auto";
}, function (_a) {
    var height = _a.height;
    return height || "auto";
}, function (_a) {
    var justifyContent = _a.justifyContent;
    return justifyContent;
}, function (_a) {
    var justifySelf = _a.justifySelf;
    return justifySelf || "center";
}, function (_a) {
    var position = _a.position;
    return position || "relative";
}, function (_a) {
    var width = _a.width;
    return width || "auto";
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex || "auto";
});
var defaultExport$1 = Object.assign(Grid, { Item: GridItem });
var templateObject_1$2, templateObject_2$1;

var Card = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  background: ", ";\n  border: ", ";\n  padding: ", ";\n"], ["\n  background: ", ";\n  border: ", ";\n  padding: ", ";\n"])), function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
}, function (_a) {
    var border = _a.border;
    return border || "1px solid black";
}, function (_a) {
    var padding = _a.padding;
    return padding || "0.5em";
});
var templateObject_1$3;

var Header = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    display: flex;\n    width: 100%;\n    background: ", ";\n    color: ", ";\n    font-weight: 500;\n    padding: ", ";\n    font-size: ", ";\n    justify-content: center;\n    align-items: center;\n"], ["\n    display: flex;\n    width: 100%;\n    background: ", ";\n    color: ", ";\n    font-weight: 500;\n    padding: ",
    ";\n    font-size: ",
    ";\n    justify-content: center;\n    align-items: center;\n"])), function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
}, function (_a) {
    var textColor = _a.textColor;
    return textColor;
}, function (_a) {
    var size = _a.size;
    switch (size) {
        case "large":
            return "1em 0.5em";
        case "small":
            return "0.5em 0.25em";
        default:
            return "0.75em 0.5em";
    }
}, function (_a) {
    var size = _a.size;
    switch (size) {
        case "large":
            return "30px";
        case "small":
            return "26px";
        default:
            return "28px";
    }
});
var templateObject_1$4;

var List = styled.ul(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  align-items: ", ";\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: ", ";\n  justify-content: ", ";\n  list-style: none;\n  width: ", ";\n  height: ", ";\n"], ["\n  align-items: ", ";\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: ", ";\n  justify-content: ", ";\n  list-style: none;\n  width: ", ";\n  height: ", ";\n"])), function (_a) {
    var alignItems = _a.alignItems;
    return alignItems || "flex-start";
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
}, function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var flexDirection = _a.flexDirection;
    return flexDirection;
}, function (_a) {
    var justifyContent = _a.justifyContent;
    return justifyContent || "flex-start";
}, function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var height = _a.height;
    return height || "100%";
});
var ListItem = styled.li(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: ", ";\n  align-self: ", ";\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  flex-basis: ", ";\n  order: ", ";\n"], ["\n  align-items: ", ";\n  align-self: ", ";\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  flex-basis: ", ";\n  order: ", ";\n"])), function (_a) {
    var alignItems = _a.alignItems;
    return alignItems || "flex-start";
}, function (_a) {
    var alignSelf = _a.alignSelf;
    return alignSelf || "flex-start";
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
}, function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var flexBasis = _a.flexBasis;
    return flexBasis || "auto";
}, function (_a) {
    var order = _a.order;
    return order || 0;
});
var templateObject_1$5, templateObject_2$2;

export { Button, Card, defaultExport as Flex, defaultExport$1 as Grid, Header, List, ListItem };
//# sourceMappingURL=index.esm.js.map
