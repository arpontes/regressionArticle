import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        border: "1px solid blue"
    }
});
export function ButtonWrp({ desc, showBorder }) {
    const classes = useStyles();
    return (
        <div className={showBorder ? classes.root : ""}>
            <Button desc={desc} />
        </div>
    );
}
function Button({ desc }) {
    return <input type="button" value={desc} />;
}
