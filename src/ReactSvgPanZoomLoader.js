import React from 'react'
import PropTypes from 'prop-types'
import { SvgLoader } from 'react-svgmt'

/**
 * Loading the svg file using react-svgmt
 * @param props
 * @returns {*}
 * @constructor
 */
const ReactSvgPanZoomLoader = (props) => {
    return (
        <div>
            {props.render(
                <SvgLoader path={props.src} onSVGReady={props.onSVGReady}>
                    {props.proxy}
                </SvgLoader>
            )}
        </div>
    )
};

ReactSvgPanZoomLoader.defaultProps = {
    proxy: "",
    onSVGReady: ()=> console.info("You need add onSVGReady props ")
};

ReactSvgPanZoomLoader.propTypes = {
    src: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    proxy: PropTypes.node,
    onSVGReady: PropTypes.func
};

export {ReactSvgPanZoomLoader}
