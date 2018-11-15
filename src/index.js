window.DEV_ENV = true;

window.clog = {
    consoleColor: {
        "log": "color:#E48486; font-weight: 700; font-size: 1.125em; text-decoration: underline",
        "hilight": "background: #FFFF00; color: black; font-size: 1.125em; font-weight:bold; line-height: 1.5; display: block; padding: 3px 5px",
        "ok": "color:#fff; background-color:#32CD32; font-weight: bold;line-height:2; letter-spacing: 0.25em; display: block",
        "bad": "color:#fff; background-color:#ff0033; font-weight: bold;line-height:3; letter-spacing: 0.25em; display: block",
        "heading": "display: block; background-color: #222; color: #fff; text-align:center; padding: 7px 5px; font-size:1.5em; font-weight: bold; letter-spacing: 0.2em"
    },
    log(...args) {
        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        var all = comment
        console.log("%c" + comment + ' ' + values,  this.consoleColor.log );
    },
    comment(...args) {
        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c" + comment + "%c" + values, this.consoleColor.log);
    },
    hilight(...args) {
        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c " + comment + ":- " + values, this.consoleColor.hilight);
    },
    ok(...args) {
        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c " + comment + ":- " + values, this.consoleColor.ok);
    },
    good(...args) {
        this.ok(...args);
    },
    bad(...args) {
        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c " + comment + ":- " + values, this.consoleColor.bad);
    },
    grp(heading) {
        if (!window.DEV_ENV) {
            return;
        }
        console.group("%c " + heading, this.consoleColor.heading );
    },
    grpEnd(heading) {
        console.groupEnd(heading);
    },
    destructArgs(...args) {
        if (args.length <= 0) {
            return false;
        }
        var comment = args[0][0];
        var values = args[0].slice(1).join(" ");
        return {
            comment: comment,
            values: values
        }

    }
};

clog.log("Testing:-", "This", "output");
clog.hilight("HIlighted text", "and the values", "the can go with it");
clog.ok("Comment for ok all green");
clog.grp("Group start");
clog.bad("something went wrong");
clog.grpEnd();
clog.good("This is good test");
clog.comment("How does this work", "comma seperated", "values");