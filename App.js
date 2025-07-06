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
    [0, ".", "="],
];

const App = () => {
    const [input, setInput] = useState( "" );
    const [result, setResult] = useState( "0" );
    const [isResultDisplayed, setIsResultDisplayed] = useState( false );

    const handleClick = ( value ) => {
        if ( value === "C" ) {
            setInput( "" );
            setResult( "0" );
            setIsResultDisplayed( false );
        } else if ( value === "=" ) {
            try {
                const sanitized = input.replace( /÷/g, "/" ).replace( /x/g, "*" );
                const evalResult = eval( sanitized ).toString();
                setResult( evalResult );
                setInput( "" );
                setIsResultDisplayed( true );
            } catch {
                setResult( "Error" );
                setInput( "" );
                setIsResultDisplayed( true );
            }
        } else if ( value === "+/-" ) {
            if ( input ) {
                const newInput = input.replace( /(-?\d+)(?!.*\d)/, ( num ) => ( -parseFloat( num ) ).toString() );
                setInput( newInput );
            }
        } else {
            if ( isResultDisplayed ) {
                if ( ["+", "-", "x", "÷"].includes( value ) ) {
                    setInput( result + value );
                } else {
                    setInput( value.toString() );
                }
                setIsResultDisplayed( false );
            } else {
                setInput( ( prev ) => prev + value.toString() );
            }
        }
    };

    const getClass = ( val ) => {
        if ( ["+", "-", "x", "÷", "="].includes( val ) ) return "operator";
        if ( ["C", "+/-", "%"].includes( val ) ) return "special";
        if ( val === 0 ) return "zero";
        return "";
    };

    return (
        <Wrapper>
            <Screen value={input || result} />
            <ButtonBox>
                {btnValues.flat().map( ( btn, i ) => (
                    <Button
                        key={i}
                        className={getClass( btn )}
                        value={btn}
                        onClick={() => handleClick( btn )}
                    />
                ) )}
            </ButtonBox>
        </Wrapper>
    );
};

export default App;