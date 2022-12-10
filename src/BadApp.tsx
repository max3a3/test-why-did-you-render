// from https://codesandbox.io/s/why-did-you-render-sandbox-with-hooks-pyi14?file=/src/index.js:1065-2823
import React from "react"
 const App = React.memo(() => {
    const [nameObj, setNameObj] = React.useState({
        firstName: "Bob",
        lastName: "Marley"
    });

    // uncomment to render RightApp instead:
    // return <RightApp />;

    return (
        <div style={{ padding: 20 }}>
            {"Hi "}
            <b>
                {nameObj.firstName} {nameObj.lastName}
            </b>
            <br />
            {"First Name "}
            <button onClick={() => setNameObj({ ...nameObj, firstName: "Bob" })}>
                Bob
            </button>
            <button onClick={() => setNameObj({ ...nameObj, firstName: "Tom" })}>
                Tom
            </button>
            <br />
            {"Last Name "}
            <button onClick={() => setNameObj({ ...nameObj, lastName: "Marley" })}>
                Marley
            </button>
            <button onClick={() => setNameObj({ ...nameObj, lastName: "Sawyer" })}>
                Soyer
            </button>
            <br />
            <br />
            Click twice on the same button to see how the component re-renders because
            of a missuse of the "useState" hook.
            <br />
            <br />
            Notice how "whyDidYouRender" screams in the console when you do that.
            <br />
            <br />
            This is because the "nameObj" is always re-created, even if the object's
            content doesn't change, because:
            <br />
            <br />
            {"{ firstName: 'x', lastName: 'y' }"}
            <br />
            !==
            <br />
            {"{ firstName: 'x', lastName: 'y' }"}
            <br />
            <br />
            where they are equal by value.
            <br />
            <br />
            Take a look at RightApp component above to see how it can be done rightly,
            so clicking twice on the same button, won't cause re-render because
            <br />
            <br />
            firstName === firstName even when clicking on the same button twice
        </div>
    );
});

App.displayName = "App";

export default App