var BASE_PATH = location.href.replace(/[^/]*$/, '');
var UPLOADS_DIR = BASE_PATH + 'res/img/uploads/';
var THUMB_PATH = UPLOADS_DIR + 'thumb/';
var LARGE_PATH = UPLOADS_DIR + 'large/';
var FULL_PATH = UPLOADS_DIR + 'full/';

var isModalOpen = false;
var modal = document.getElementById('modal');

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape && isModalOpen) {
        modal.classList.add('hidden');
        isModalOpen = false;
        modal.childNodes[1].src = "";
    }
};




class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);

    }

    showModal(url) {

      modal.childNodes[1].src = LARGE_PATH + this.props.info.img;
      modal.classList.remove('hidden');
      isModalOpen = true;
    }

    render() {
        const info = this.props.info;
        const uploader = getById(info.author, users);


        return (
            <div className="image-card-wrapper" >
                <div onClick={this.showModal} className="image-card">
                <img src={THUMB_PATH + info.img} />
                    <div className="image-details">
                        <h1>{info.title}</h1>
                        <h3>Uploader: {uploader.name}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

class GalleryContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const selectedCategory = categories[this.props.selectedCategory];
        console.log(selectedCategory);
        const images = selectedCategory.items.map((image, i) => <ImageCard key={i} info={image} />);
        return(
            <div className="gallery-content">
                {images}
            </div>
        )
    }
}

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const selectedCategory = categories[this.props.selectedCategory];
        const featured = getById(selectedCategory.featured, selectedCategory.items);
        const style = {
            backgroundImage: 'url("' + LARGE_PATH + featured.img + '")'
        };
        return (
            <div>
                <div className="header">
                    <h3 className="page-title">Store</h3>
                    <div className="user">
                      <div className="userImage">
                      <img src="res/img/uploads/thumb/bridge.jpg" />
                      <h4> User </h4>
                      </div>
                    </div>

                </div>
                <div className="featured" style={style}>
                    <div className="highlight">
                        <h3 className="category-title">{selectedCategory.name}</h3>
                        <div className="featured-right">
                            <button className="buy-btn">Buy for {selectedCategory.price}</button>
                        </div>
                    </div>
                </div>
                <div className="controls">
                  <span className="grid"> <i className="fa fa-th"> </i> </span>
                  <span className="list"> <i className="fa fa-bars"> </i> </span>
                    <input type="range" min="1" max="4" className="slider" id="myRange" />

                  <ul>
                    <li> <a href = "#" className="controlActive" > All Projects </a> </li>
                    <li> <a href="#"> Synced Projects  </a> </li>
                  </ul>
                  <div className="searchBar">
                    <input type="text" id="search" autoComplete="off" placeholder="Search" />
                  </div>
                </div>
                <GalleryContent selectedCategory={this.props.selectedCategory} />
            </div>
        )
    }
}


class CategoryList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const categoryList = categories.map((category, i) =>
                <li onClick={() => this.props.updateCategory(i)} index={i} key={i}>
                <img className="left-thumb" src={THUMB_PATH + getById(category.featured, category.items).img} />
                    {category.name}
                    <span className="price"> {category.price} </span>
                </li>
            );

        return (<ul>{categoryList}</ul>);
    }
}

class UserList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const userList = users.map((user, i) =>
            <li index={i} key={i}>{user.name}</li>);

        return (<ul>{userList}</ul>);
    }
}


class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: 0};
        this.setCategory = this.setCategory.bind(this);
    }



    setCategory(id) {
        this.setState({category: id})
    }

    render() {
        console.log('cat' + this.state.category);
        return (
        <div className="store">
            <div className="left">
                <h4 className="left-heading">Popular in Store</h4>
                <CategoryList updateCategory={this.setCategory} />
                <br />
                <h4 className="left-heading2">Popular Users</h4>
                <UserList />
                <div className="usage">
                <div className="titleUsage"> 75 GB of 256 GB used </div>
                <div className="bar">
                <div className="progress"></div>
                </div>
                </div>
            </div>
            <div className="right">
                <Gallery selectedCategory={this.state.category} />
            </div>
        </div>);
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
  }
    render() {
        return (
            <div>
                <div className="menu">
                <div className="half">
                    <div className="home active" > <div className="icon">  <i className= "fa fa-paper-plane fa-2x"> </i> </div> </div>
                    <div className="pictures" > <div className="icon"> <i className= "fa fa-image fa-2x"> <div className="fontSize"> Pictures </div> </i> </div> </div>
                    <div className="analytics inactive"> <div className="icon"> <i className= "fa fa-th-list fa-2x"> <div className="fontSize"> Analytics </div> </i> </div> </div>
                    <div className="insights inactive"> <div className="icon"> <i className= "fa fa-clone fa-2x"> <div className="fontSize"> Insights </div> </i> </div> </div>
                    <div className="deadlines inactive"> <div className="icon"> <i className= "fa fa-bars fa-2x"> <div className="fontSize"> Deadlines </div> </i> </div> </div>
                </div>

                </div>
              <Store />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
