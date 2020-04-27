export function getAvatarUrl(avatar, username) {
    if(avatar === null){
        return "https://api.adorable.io/avatars/" + username 
    }
    else {
        return "/f/accounts/" + avatar
    }
}
