import React, { useContext } from 'react'
// import { injectCSPMetaTagIntoDataURI } from '../../../utils/html'
import classnames from 'classnames'
import { HicetnuncContext } from '../../../context/HicetnuncContext'
import styles from './index.module.scss'

export const HTMLComponent = ({ src, interactive, preview, token_info }) => {
  const context = useContext(HicetnuncContext)
  const classes = classnames({
    [styles.container]: true,
    [styles.interactive]: interactive,
  })

  let _creator_ = false
  let _viewer_ = false

  if (token_info && token_info.creators[0]) {
    _creator_ = token_info.creators[0]
  }

  if (context.address !== '') {
    _viewer_ = context.address
  }

  console.log('creator', _creator_)
  console.log('viewer', _viewer_)

  // let safeSrc
  // if (preview) {
  //   safeSrc = injectCSPMetaTagIntoDataURI(src)
  // } else {
  //   safeSrc = `${src}?creator=${_creator_}&viewer=${_viewer_}`
  // }

  // TOOD: Disabled until displaying from zip is re-implemented
  return (
    <div className={classes}>
      Preview not available for HTML ZIP files.
      <br />
      Click 'mint' below to proceed.
      {/* <iframe
        title="hic et nunc HTML renderer"
        src={safeSrc}
        sandbox="allow-scripts"
        scrolling="no"
      /> */}
    </div>
  )
}
