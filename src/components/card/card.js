import { useHistory }from "react-router-dom"


export default function NewCard(props) {

    const history = useHistory();

    function handleClick(){
        history.push(`/details/${props.item.id}`)
    }

    return (
        <div className="card">
            <img src="http://www.ub.edu/grop/wp-content/uploads/2019/07/placeholder.png" className="card-img-top"  alt="" />
            
            <div className="cards">
                
                <h3 className="card-title">{props.item.title}</h3>
                <p className="card-text">{props.item.body}</p>
                <button className="btn btn-success" onClick = {handleClick}>Details</button>

            </div>
        </div>
    )
}

// onClick = {() => setNews(news.title)}

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */