import { useState } from "react"
import { distanceDependencies, evaluate } from 'mathjs'

export const Calculator = () => {

    const [result, setResult] = useState("0")
    const [display, setDisplay] = useState("0")
    const [hasDecimal, setHasDecimal] = useState(false)



    const handleDisplay = e => {
        if (display.startsWith("0")) {
            setDisplay(display.replace("0", ""))
            setResult(result.replace("0", ""))
        }
        if (["+", "-", "/", "*"].some(char => display.endsWith(char))) {
            setHasDecimal(false)
            console.log(hasDecimal)
        }

        setDisplay(pE => pE + e.target.value)
        setResult(pE => pE + e.target.value)
    }


    const setZero = () => {
        setDisplay("0")
        setResult("0")
        setHasDecimal(false)
    }


    const getResult = () => {
        const array = display.split('')
        const matchRegEx = /[\+\-\*\/]$/
        console.log(array)
        for (let i = array.length; i > 0; i--) {
            const currentEl = array[i]
            const nextEl = array[i - 1]
            if (matchRegEx.test(currentEl) && matchRegEx.test(nextEl)) {
                array.splice(i - 1, 1)

            }
        }
        console.log(array)

        setResult(evaluate(result))
    }

    const handleDecimal = () => {

        if (hasDecimal) {
            return
        } else {
            console.log(hasDecimal)
            setDisplay(display + ".")
            setResult(result + ".")
            setHasDecimal(true)
            console.log(hasDecimal)
        }
        /*   if (display.endsWith(".")) {
               hasDecimal = true
               console.log(hasDecimal)
               return
           }
           if (!hasDecimal) {
               setDisplay(display + ".")
               hasDecimal = true
           }
   
           */

        console.log(hasDecimal)
        console.log(display)

        // const array = display.split('')
        // const lastEl = array[array.length - 1]
        // console.log(array)
        // if (!lastEl.includes('.')) {
        //     setDisplay(display + ".")
        // }
        // if (display.endsWith(".")) return
        // if (decimalRegEx.test(display) || ["+", "-", "/", "*"].some(char => display.endsWith(char))) {
        //     setDisplay(display + ".")
        //     setResult(result + ".")
        // }


    }
    return (
        <div className="w-96 h-102 px-4 py-5 bg-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-right pr-2 overflow-x-auto">{display}</h1>
            <div id="display" className="text-right pr-2 overflow-x-auto">
                <h3>{result}</h3>
            </div>

            <div id="calcButtons" className="grid grid-cols-4 mt-20 gap-1 gap-y-3">
                <button onClick={setZero} className="bg-black text-white col-span-2 rounded-full hover:bg-slate-900 p-2" id="clear">AC</button>
                <button value={"/"} onClick={handleDisplay} className="bg-black text-white rounded-full hover:bg-gray-900" id="divide">/</button>
                <button value={"*"} onClick={handleDisplay} className="bg-black text-white hover:bg-gray-900 rounded-full" id="multiply">*</button>
                <button value={7} onClick={handleDisplay} className="bg-black text-white hover:bg-gray-900 rounded-full p-2" id="seven">7</button>
                <button value={8} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full" id="eight">8</button>
                <button value={9} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full" id="nine">9</button>
                <button value={"-"} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full" id="subtract">-</button>
                <button value={4} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full p-2" id="four">4</button>
                <button value={5} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full" id="five">5</button>
                <button value={6} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full" id="six">6</button>
                <button value={"+"} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full" id="add">+</button>
                <button value={1} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full p-2" id="one">1</button>
                <button value={2} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full" id="two">2</button>
                <button value={3} onClick={handleDisplay} className="bg-black hover:bg-gray-900 text-white rounded-full" id="three">3</button>
                <button value={"="} onClick={getResult} className="bg-black hover:bg-gray-900 text-white row-span-2 rounded-full" id="equals">=</button>
                <button value={0} onClick={handleDisplay} className="bg-black hover:bg-gray-900 p-2 text-white col-span-2 rounded-full" id="zero">0</button>
                <button value={"."} onClick={handleDecimal} className="bg-black hover:bg-gray-900 text-white rounded-full" id="decimal">.</button>
            </div>
        </div>
    )
}