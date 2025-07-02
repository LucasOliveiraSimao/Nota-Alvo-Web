'use client'

import { useState } from 'react'

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('')

  const appendChar = (char: string) => {
    if (displayValue.length < 4) {
      // Verifica se o caractere já foi digitado e se é um ponto decimal
      if (char === '.' && displayValue.includes('.')) {
        return; // Evita múltiplos pontos decimais
      }

      // Concatena o caractere ao valor atual na tela
      setDisplayValue(prev => prev + char)
    }
  }

  const clearDisplay = () => {
    setDisplayValue('')
  }

  const deleteChar = () => {
    setDisplayValue(prev => prev.slice(0, -1))
  }

  const calculateResult = () => {
    const inputValue = parseFloat(displayValue)

    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 10) {
      // Calcula o resultado conforme especificado
      const result = 15 - (inputValue * 2)

      if (inputValue >= 8.0 && inputValue <= 10.0) {
        alert('Você passou na disciplina.')
        console.log(inputValue)
      }
      else if (inputValue >= 7.5 && inputValue <= 7.99) {
        alert('Apenas os alunos que obtiverem média igual ou superior a 8.00 estarão dispensados da Prova Final. Alunos com notas abaixo de 8.00 não terão essa dispensa e, caso optem por não realizar a Prova Final, receberão nota zero.')
      }
      else if (inputValue >= 2.5 && inputValue <= 7.49) {
        alert('A nota necessária para a aprovação na Prova Final é: ' + result.toFixed(2))
      }
      else {
        alert('Lamentavelmente, as chances de você ser aprovado são inexistentes.')
      }
      setDisplayValue('')
    } else {
      // Exibe uma mensagem de erro se o valor estiver fora do intervalo
      setDisplayValue('Erro')
    }
  }

  return (
    <div className="nota-alvo-frame">
      <div className="notch"></div>
      <div className="screen">
        <div className="calculator">
        <div className="display">{displayValue || '0'}</div>
        <button onClick={clearDisplay}>CE</button>
        <button onClick={deleteChar}>←</button>
        <button onClick={() => appendChar('.')}>.</button>

        <button onClick={() => appendChar('7')}>7</button>
        <button onClick={() => appendChar('8')}>8</button>
        <button onClick={() => appendChar('9')}>9</button>

        <button onClick={() => appendChar('4')}>4</button>
        <button onClick={() => appendChar('5')}>5</button>
        <button onClick={() => appendChar('6')}>6</button>

        <button onClick={() => appendChar('1')}>1</button>
        <button onClick={() => appendChar('2')}>2</button>
        <button onClick={() => appendChar('3')}>3</button>

        <button onClick={() => appendChar('0')} className="zero">0</button>
        <button onClick={calculateResult} className="equals">=</button>
        </div>
      </div>
    </div>
  )
}
