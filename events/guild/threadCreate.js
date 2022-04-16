//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by Limsathya#2846 | https://discord.gg/PTGzEysqjf
 * @INFO
 * Work for Limsathyacord | https://discord.gg/PTGzEysqjf
 * @INFO
 * Please mention him / Limsathyacord, when using this Code!
 * @INFO
 */
