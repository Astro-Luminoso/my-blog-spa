import type {SxProps} from "@mui/material";
import {config} from "../config/config.ts";

const mainPageBackground : SxProps= {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(2, 2, 2, 0.6), rgba(2, 2, 2, 0.6)), url(${config.API_URL}/open/images/main-background)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

const kiyvTypeSans = {
    fontFamily: 'kyivType Sans',
    fontWeight: 50,
    color: "#ffffff",
}

const mainTitle: SxProps = {
    ...kiyvTypeSans,
    fontSize: {
        xs: "4rem",
        md: "5rem",
    },
}

const subTitle: SxProps = {
    ...kiyvTypeSans,
    fontSize: {
        xs: "2rem",
        md: "3rem",
    }
}


export { mainPageBackground, mainTitle, subTitle, }