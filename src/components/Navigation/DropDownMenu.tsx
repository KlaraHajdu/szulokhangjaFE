import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.secondary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);

export default function DropDownMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="secondary"
                onClick={handleClick}
            >
                Új Bejelentés
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                color="secondary"
            >
                <StyledMenuItem>
                    <Link to="/parent-post" style={{ textDecoration: "none" }}>
                        <ListItemText primary="Szülő vagyok" />
                    </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Link to="/teacher-post" style={{ textDecoration: "none" }}>
                        <ListItemText primary="Tanár vagyok" />
                    </Link>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
