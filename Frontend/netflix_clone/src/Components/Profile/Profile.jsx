import assets from "../Assets/user.jpg"
import assets2 from "../Assets/adduser.png"
import styles from "../Profile/Profile.module.css"
const Profile =()=> {

    return(
        <>
        <h1 className ="text-center text-white mt-5">Who's Watching</h1>
        <div className="container mt-5">
               

                <div>
                    <div className="row mt-4">
                        <div className="col-lg-3">
                            <img  className ={styles.imgfield} alt="movie" src={assets} width="250" height="200" />
                        </div>
                        <div className="col-lg-3">
                            <img   className ={styles.imgfield} alt="movie" src={assets2} width="250" height="200" />
                        </div>
                        <div className="col-lg-3">
                            <img  className ={styles.imgfield} alt="movie" src={assets2} width="250" height="200" />
                        </div>
                        <div className="col-lg-3">
                            <img  className ={styles.imgfield}  alt="movie" src={assets2} width="250" height="200" />
                        </div>
                       
                    </div>
                </div>
            </div>

            <div className ={styles.butnclass}>
                <button className =" btn btn-dark btn-lg ">
                   Manage Profile
                </button>
            </div>

        </>
    )

}

export default Profile;