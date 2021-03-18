import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      flexDirection: "column",
    },
    // "@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap')": true,
    title: {
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "50px",
    },
    blockTop: {
      width: "0",
      height: "inherit",
      background: "#ffb510",
      position: "absolute",
      animation: "$mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards",
      display: "flex",
    },
    titleText: {
      color: "#fff",
      fontSize: "64px", //32px
      WebkitAnimation: "$mainFadeIn 2s forwards",
      animation: "$mainFadeIn 2s forwards",
      animationDelay: "1.6s",
      opacity: 0,
      display: "flex",
      alignItems: "baseline",
      position: "relative",
      "& span": {
        width: "0px",
        height: "0px",
        WebkitBorderRadius: "50%",
        MozBorderRadius: "50%",
        borderRadius: "50%",
        background: "#ffb510",
        WebkitAnimation:
          "load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards",
        animation: "$popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards",
        animationDelay: "2s",
        marginLeft: "5px",
        marginTop: "-10px",
        position: "absolute",
        bottom: "13px",
        right: "-12px",
      },
    },
    role: {
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "30px",
      marginTop: "10px", //-10px
      "& p": {
        animation: "$secFadeIn 2s forwards",
        animationDelay: "3.2s",
        opacity: 0,
        fontWeight: 400,
        // fontFamily: '"Lato"',
        color: "#ffffff",
        fontSize: "24px", //12px
        textTransform: "uppercase",
        letterSpacing: "5px",
      },
    },
    blockBottom: {
      width: "0%",
      height: "inherit",
      background: "#e91e63",
      position: "absolute",
      animation: "$secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards",
      animationDelay: "2s",
      display: "flex",
    },
    "@keyframes mainBlock": {
      "0%": { width: "0%", left: "0" },
      "50%": { width: "100%", left: "0" },
      "100%": { width: "0", left: "100%" },
    },
    "@keyframes secBlock": {
      "0%": { width: "0%", left: "0" },
      "50%": { width: "100%", left: "0" },
      "100%": { width: "0", left: "100%" },
    },
    "@keyframes mainFadeIn": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
    "@keyframes popIn": {
      "0%": {
        width: "0px",
        height: "0px",
        background: "#e9d856",
        border: "0px solid #ddd",
        opacity: 0,
      },
      "50%": {
        width: "10px",
        height: "10px",
        background: "#e9d856",
        opacity: 1,
        bottom: "45px",
      },
      "65%": { width: ["7px", "15px"], height: "7px", bottom: "0px" },
      "80%": { width: "10px", height: "10px", bottom: "20px" },
      "100%": {
        width: "7px",
        height: "7px",
        background: "#e9d856",
        border: "0px solid #222",
        bottom: "13px",
      },
    },
    "@keyframes secFadeIn": { "0%": { opacity: 0 }, "100%": { opacity: 0.5 } },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className={classes.blockTop}></span>
        <h1 className={classes.titleText}>
          Bhavya<span></span>
        </h1>
      </div>

      <div className={classes.role}>
        <div className={classes.blockBottom}></div>
        <p>FULL STACK WEB DEVELOPER</p>
      </div>
    </div>
  );
}

export default HeaderText;
