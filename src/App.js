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
    ["",0, ".", "="],
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
                const evalResult = eval( input ).toString();
                setResult( evalResult );
                setInput( "" );
                setIsResultDisplayed( true ); 
            } catch {
                setResult( "Error" );
                setInput( "" );
                setIsResultDisplayed( true );
            }
        } else if ( value === "+-" ) {
            if ( input ) {
                const newInput = input.replace( /(-?\d+)(?!.*\d)/, ( num ) => ( -parseFloat( num ) ).toString() );
                setInput( newInput );
            }
        } else {
            if ( isResultDisplayed ) {
                if ( ["+", "-", "*", "/"].includes( value ) ) {
                    setInput( result + value );
                } else {
                    setInput( value );
                }
                setIsResultDisplayed( false );
            } else {
                setInput( ( prev ) => prev + value );
            }
        }
    };



    return (
        <Wrapper>
            <Screen value={input || result} />
            <ButtonBox>
                {btnValues.flat().map( ( btn, i ) => {
                    return (
                        <Button
                            key={i}
                            className={btn === "=" ? "equals" : ""}
                            value={btn}
                            onClick={() => handleClick( btn.toString() )}
                        />
                    );
                } )}
            </ButtonBox>
        </Wrapper>
    );
};

export default App;
