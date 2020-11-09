import { useKeyframes } from "css-system"
import React, { useContext, useEffect, useState } from "react"
import { FiGrid, FiMenu, FiSave, FiSettings } from "react-icons/fi"
import { useIntl } from "react-intl"
import {
  DIALOG_CLOSED_REASON,
  FADE_STAGGER_DURATION,
  FADE_TRANSITION_DURATION,
} from "../constants"
import { DialogContext } from "../contexts/dialog"
import { GalleryContext } from "../contexts/gallery"
import { SoundContext } from "../contexts/sound"
import { UserContext } from "../contexts/user"
import { Deferred } from "../utils/deferred"
import { Badge } from "./badge"
import { Dialog } from "./dialog"
import { Logo } from "./logo"
import { Hint, Link, Title } from "./primitives"
import { Text } from "./text"
import { View } from "./view"

const MenuItem = ({ action, icon, text }) => {
  const { playButton } = useContext(SoundContext)
  return (
    <View
      css={{
        alignItems: "center",
        flexDirection: "row",
        gap: 3,
        cursor: "pointer",
        py: 3,
      }}
      onClick={() => {
        playButton()
        action()
      }}
    >
      <View as={icon} css={{ size: "icon" }}></View>
      <Text css={{ fontSize: 3 }}>{text}</Text>
    </View>
  )
}

export const Menu = () => {
  const { playButton } = useContext(SoundContext)
  const intl = useIntl()

  const { showGallery, showSettings, showHome } = useContext(DialogContext)

  const [menuDialogDeferred, setMenuDialogDeferred] = useState()

  const handleMenuClick = () => {
    playButton()
    const deferred = new Deferred()
    setMenuDialogDeferred(deferred)
    return deferred.promise.finally(() => setMenuDialogDeferred(null))
  }

  const gradient = useKeyframes({
    0: { color: "pieces.lt2" },
    14: { color: "pieces.rh" },
    28: { color: "pieces.st2" },
    42: { color: "pieces.mt1" },
    57: { color: "pieces.st1" },
    71: { color: "pieces.lt1" },
    85: { color: "pieces.sq" },
    100: { color: "pieces.lt2" },
  })

  const flightAnimation = useKeyframes({
    from: { transform: "translate(0, 0)" },
    to: {
      transform: "translate(30px, -30px)",
    },
  })

  return (
    <>
      <View
        css={{
          position: "fixed",
          top: 3,
          left: 3,
          animation: `${gradient} 20s linear infinite both`,
        }}
      >
        <View
          as={FiMenu}
          css={{
            size: "menu",
            cursor: "pointer",
          }}
          onClick={handleMenuClick}
        ></View>
      </View>

      {menuDialogDeferred && (
        <Dialog
          onClose={() => menuDialogDeferred.reject(DIALOG_CLOSED_REASON)}
          title={
            <View css={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
              <Logo
                css={{
                  size: "badge",
                  ml: "-2px",
                  mr: "-6px",
                  overflow: "visible",
                  "& > g": {
                    animation: `${flightAnimation} ${FADE_TRANSITION_DURATION}ms ${FADE_STAGGER_DURATION}ms ease both`,
                  },
                }}
              />
              <Title>{intl.formatMessage({ id: "GEMgrams" })}</Title>
            </View>
          }
          css={{ gap: 3, overflow: "initial" }}
        >
          <View>
            <MenuItem
              action={showGallery}
              icon={FiGrid}
              text={intl.formatMessage({ id: "Tangram gallery" })}
            ></MenuItem>

            <MenuItem
              action={showSettings}
              icon={FiSettings}
              text={intl.formatMessage({ id: "Settings" })}
            ></MenuItem>

            <MenuItem
              action={showHome}
              href="../"
              icon={FiSave}
              text={intl.formatMessage({ id: "Back to home" })}
            ></MenuItem>
          </View>

          <View
            css={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          ></View>
        </Dialog>
      )}
    </>
  )
}
