import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
    ["C", "+/-", "%", "÷"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    ["", 0, ".", "="],
];

const replaceOperators = ( input ) =>
    input.replace( /x/g, "*" ).replace( /÷/g, "/" );

const App = () => {
    const [input, setInput] = useState( "" );
    const [result, setResult] = useState( "0" );
    const [isResultDisplayed, setIsResultDisplayed] = useState( false );

    const calculateResult = ( expression ) => {
        try {
            const cleanExpr = replaceOperators( expression );
            // Avoid using eval directly
            const output = new Function( "return " + cleanExpr )();
            return output.toString();
        } catch {
            return "Error";
        }
    };

    const handleClick = ( value ) => {
        if ( value === "C" ) {
            setInput( "" );
            setResult( "0" );
            setIsResultDisplayed( false );
            return;
        }

        if ( value === "=" ) {
            const finalResult = calculateResult( input );
            setResult( finalResult );
            setInput( "" );
            setIsResultDisplayed( true );
            return;
        }

        if ( value === "+/-" ) {
            // Flip last number's sign
            const updated = input.replace( /(-?\d+\.?\d*)$/, ( num ) =>
                ( -parseFloat( num ) ).toString()
            );
            setInput( updated );
            return;
        }

        // Handle operator input after result
        if ( isResultDisplayed ) {
            if ( ["+", "-", "*", "/", "x", "÷"].includes( value ) ) {
                setInput( result + value );
            } else {
                setInput( value );
            }
            setIsResultDisplayed( false );
            return;
        }

        // Append normally
        setInput( ( prev ) => prev + value );
    };

    return (
        <Wrapper>
            <Screen value={input || result} />
            <ButtonBox>
                {btnValues.flat().map( ( btn, i ) => (
                    <Button
                        key={i}
                        className={btn === "=" ? "equals" : ""}
                        value={btn}
                        onClick={() => handleClick( btn.toString() )}
                    />
                ) )}
            </ButtonBox>
        </Wrapper>
    );
};

export default App;
