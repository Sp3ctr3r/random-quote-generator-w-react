import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");

  const quotes = [
    {
      text: "Bilgi güçtür.",
      author: "Sir Francis Bacon"
    },
    {
      text: "Bir toplumu eğitmek, bir bireyi eğitmekle başlar.",
      author: "Helen Keller"
    },
    {
      text: "Hayat, başkalarının ne dediğiyle değil, kendi içimizde ne hissettiğimizle ilgilidir.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "Bir insanın karakteri, zor zamanlarda ortaya çıkar.",
      author: "Booker T. Washington"
    },
    {
      text: "Bilgi güçtür.",
      author: "Sir Francis Bacon"
    },
    {
      text: "Gerçek bir lider, takımını zafer kazandığında geri çekilir; başarısızlık olduğunda ise sorumluluğu üstlenir.",
      author: "Arnold H. Glasow"
    },
    {
      text: "Büyük zihinler düşünmeyi, orta zihinler konuşmayı, küçük zihinler ise eleştirmeyi sever.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Bilgelik, bilmediğini bilmektir. Aptallık ise bilmediğini bilmemektir.",
      author: "Sokrat"
    },
    {
      text: "Hayat, ne kadar soluk alıp verdiğinle değil, ne kadar anlam kattığınla ilgilidir.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "İyi bir güldürü, düşündürürken eğlendirir.",
      author: "Bernard Shaw"
    },
    {
      text: "Özür dilemek, güçsüz değil, büyük bir insanın işaretidir.",
      author: "Nelson Mandela"
    }
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor((Math.random() * 11));

    setQuote(quotes[randomIndex]);
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  const handleClick = () => {
    getRandomQuote();
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="main-box">
              <div className="generatorBox">
                <p>{quote.text + ""}</p>
                <p>{"-" + quote.author}</p>
              </div>
              <div>
                <button type="button" className="btn btn-info" onClick={handleClick}>Click!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;