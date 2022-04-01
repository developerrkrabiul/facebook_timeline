

class Post{

    constructor(){
        this.show_post_section = document.getElementById('post_show_section');
    }



    
    showPost(posts){
        let post = "";
        posts.map((data, index)=>{

            let { id, name, aphoto, contain, photo} = data;
            post +=`
                    <div class="card-body d-flex justify-content-between pb-1">

                        <div class="post_pro_sec_full d-flex ">
                            <img class="post_pro_photo" src="${aphoto}" alt="">
                            <div class="post_name_info">
                                <h1 id="post_user_name" class=" ">${name}</h1>
                                <h2 id="post_date" class=" ">Yesterday at 1:01 PM</h2>
                            </div>
                        </div>
                        <button id="p_edite_delate">...</button>
                    </div>
                    <div class="post_contain_sec ">
                        <p class="post_contain">${contain}</p>
                        <img id="post_image" class="w-100" src="${photo}" alt="">
                    </div>            
            `
        });
        this.show_post_section.innerHTML = post;
    }

};

let post = new Post;
export default post;