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

const laBelleAurore = {
    fontFamily: 'La Belle Aurore',
    fontWeight: 50,
    color: "black",
}

const mainTitle: SxProps = {
    ...kiyvTypeSans,
    fontSize: {
        xs: "2rem",
        md: "3rem",
        xl: "4rem",
    },
    fontWeight: 50,
    color: '#000000',
    marginBottom: '1rem',
}

const subTitle: SxProps = {
    ...kiyvTypeSans,
    fontSize: {
        xs: "1.5rem",
        md: "3rem",
    }
}


const buttonReaction = {
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
        color: 'gray',
        backgroundColor: 'inherit'
    },
    '&:active': {
        transition: 'color 0.1s ease-in-out',
        color: 'lightgray',

    }
}

const clickable = {
    cursor: 'pointer'
}

const navElement = {
    ...clickable,
    ...kiyvTypeSans,
    ...buttonReaction,
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: 150,
    color: 'darkgray',
    marginX: '1rem',
    textTransform: 'None'

}


export { mainPageBackground, subTitle, clickable, navElement, laBelleAurore, mainTitle, buttonReaction, kiyvTypeSans }