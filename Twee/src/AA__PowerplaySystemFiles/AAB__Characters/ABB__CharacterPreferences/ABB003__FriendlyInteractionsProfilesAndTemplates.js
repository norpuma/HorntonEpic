class ConversationTopic extends SugarcubeSerializableObject {
    constructor(topicKey, topicDescriptionPassage, topicEffectDescriptionPassage, effectFunction){
        super()
        this.topicKey = topicKey
        this.topicDescriptionPassage = topicDescriptionPassage
        this.topicEffectDescriptionPassage = topicEffectDescriptionPassage
        this.effectFunction = effectFunction
        this.isDisliked = false
        this.isLiked = false
    }
    setIsDisliked(set){
        if (set === undefined){
            set = true
        }
        if (set == true){
            this.isDisliked = true
            this.isLiked = false
        } else {
            this.isDisliked = false
        }
    }
    setIsLiked(set){
        if (set === undefined){
            set = true
        }
        if (set == true){
            this.isLiked = true
            this.isDisliked = false
        } else {
            this.isLiked = false
        }
    }
}

class ConversationProfile extends SugarcubeSerializableObject {
    constructor(){
        super()
        this.preferedTopics = new Array()
        this.dislikedTopics = new Array()
        this.startingKeyTopics = new Array()
        this.topics = new Map()
    }
    addPreferedTopic(topicKey, topicDescriptionPassage, topicEffectDescriptionPassage, effectFunction){
        let topic = new ConversationTopic(topicKey, topicDescriptionPassage, topicEffectDescriptionPassage, effectFunction)
        this.preferedTopics.push(topic)
        this.topics.set(topicKey, topic)
    }
    addDislikedTopic(topicKey, topicDescriptionPassage, topicEffectDescriptionPassage, effectFunction){
        let topic = new ConversationTopic(topicKey, topicDescriptionPassage, topicEffectDescriptionPassage, effectFunction)
        this.dislikedTopics.push(topic)
        this.topics.set(topicKey, topic)
    }
    addStartingKeyTopic(topicKey, topicDescriptionPassage, topicEffectDescriptionPassage, effectFunction){
        let topic = new ConversationTopic(topicKey, topicDescriptionPassage, topicEffectDescriptionPassage, effectFunction)
        this.startingKeyTopics.push(topic)
        this.topics.set(topicKey, topic)
    }
}
