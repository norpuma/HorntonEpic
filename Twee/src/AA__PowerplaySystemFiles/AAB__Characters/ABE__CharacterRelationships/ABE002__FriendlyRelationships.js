class FriendlyRelationship extends SugarcubeSerializableObject {
    constructor(target){
        super()
        this.sympathy = 0
        this.trust = 0
        this.safety = 0
        let conversationProfile = target.profile.preferences.conversationProfile
        this.conversationTopics = getAdditionalRandomConversationTopics(MAX_TOPICS_PER_CONVERSATION, conversationProfile.weightedPreferedTopics.keys(), conversationProfile.weightedDislikedTopics.keys(), conversationProfile.startingKeyTopics)
        this.conversationTopics.sort()
    }
}
