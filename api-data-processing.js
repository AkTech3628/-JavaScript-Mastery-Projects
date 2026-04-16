
// 1 FETCH AND FILTER USERS

async function getUsers(){
    try{

        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const users=await response.json()

        const activeUsers=users
        .filter(u=>u.name.includes("INC"))
        .map(u=>({
            id : u.id,
            name : u.name,
            email : u.email,
            company : u.company.name
        }))

        console.log("Actve Users:",activeUsers)
            return activeUsers

    }catch(error){

        console.error("Error:",error)
    }
}


// 2. FETCH AND FIND TOP POSTS
async function getTopPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        // Get first 5 posts
        const topPosts = posts
            .slice(0, 5)
            .map((p, index) => ({
                rank: index + 1,
                title: p.title.substring(0, 50) + "...",
                userId: p.userId
            }));
        
        console.log("Top Posts:", topPosts);
        return topPosts;
    } catch (error) {
        console.error("Error:", error);
    }
}


// 3. FETCH parallel API Calls

async function getMultipleData() {
    try {
        const [users, posts] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
        ]);
        
        console.log(`Fetched ${users.length} users and ${posts.length} posts`);
        return { users, posts };
    } catch (error) {
        console.error("Error:", error);
    }
}

// 4. SEARCH USERS
async function searchUsers(keyword) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        const results = users.filter(u => 
            u.name.toLowerCase().includes(keyword.toLowerCase()) ||
            u.email.toLowerCase().includes(keyword.toLowerCase())
        );
        
        console.log(`Search Results for "${keyword}":`, results);
        return results;
    } catch (error) {
        console.error("Error:", error);
    }
}


async function runAll() {
    console.log("========== API DATA PROCESSING ==========\n");
    
    await getActiveUsers();
    console.log("\n");
    
    await getTopPosts();
    console.log("\n");
    
    await getMultipleData();
    console.log("\n");
    
    await searchUsers("Akshay");
}

runAll();