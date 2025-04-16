const features = {
    premium_content_api_read_enabled: false,
    communities_web_enable_tweet_community_results_fetch: true,
    c9s_tweet_anatomy_moderator_badge_enabled: true,
    responsive_web_grok_analyze_button_fetch_trends_enabled: false,
    responsive_web_grok_analyze_post_followups_enabled: true,
    responsive_web_jetfuel_frame: false,
    responsive_web_grok_share_attachment_enabled: true,
    responsive_web_edit_tweet_api_enabled: true,
    graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
    view_counts_everywhere_api_enabled: true,
    longform_notetweets_consumption_enabled: true,
    responsive_web_twitter_article_tweet_consumption_enabled: true,
    tweet_awards_web_tipping_enabled: false,
    responsive_web_grok_show_grok_translated_post: false,
    responsive_web_grok_analysis_button_from_backend: true,
    creator_subscriptions_quote_tweet_preview_enabled: false,
    longform_notetweets_rich_text_read_enabled: true,
    longform_notetweets_inline_media_enabled: true,
    profile_label_improvements_pcf_label_in_post_enabled: true,
    rweb_tipjar_consumption_enabled: true,
    responsive_web_graphql_exclude_directive_enabled: true,
    verified_phone_label_enabled: false,
    articles_preview_enabled: true,
    responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
    freedom_of_speech_not_reach_fetch_enabled: true,
    standardized_nudges_misinfo: true,
    tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
    responsive_web_grok_image_annotation_enabled: true,
    responsive_web_graphql_timeline_navigation_enabled: true,
    responsive_web_enhance_cards_enabled: false,
};

class Twitter {
    constructor(ct0_token, auth_token) {
        this.CT0_TOKEN = ct0_token;
        this.AUTH_TOKEN = auth_token;
    }

    async createTweet(content) {
        if (this.CT0_TOKEN === undefined) {
            throw new Error("'ct0_token' is undefined");
        }
        if (this.AUTH_TOKEN === undefined) {
            throw new Error("'auth_token' is undefined");
        }
        let res = await fetch(
            "https://x.com/i/api/graphql/IVdJU2Vjw2llhmJOAZy9Ow/CreateTweet",
            {
                headers: {
                    accept: "*/*",
                    "accept-language":
                        "ko,en-US;q=0.9,en;q=0.8,zh-TW;q=0.7,zh;q=0.6",
                    authorization:
                        "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
                    "content-type": "application/json",
                    "x-client-transaction-id":
                        "6+QQD3bLrBYD6fiXpBHIWcctI/n5jSVq+Kqqih0jc8uLA2zJ8L65ZEGoOvxmXo1FQkhERuh2IcA65JlCDvKh+xsUxC8y6A",
                    "x-client-uuid": "94c60de8-d1bb-42d2-b06d-c39cf87a5725",
                    "x-twitter-active-user": "yes",
                    "x-twitter-client-language": "en",
                    "x-csrf-token": `${this.CT0_TOKEN}`,
                    cookie: `auth_token=${this.AUTH_TOKEN}; ct0=${this.CT0_TOKEN}`,
                    Referer: "https://x.com/home",
                },
                body: JSON.stringify({
                    variables: {
                        tweet_text: content,
                        dark_request: false,
                        media: {
                            media_entities: [],
                            possibly_sensitive: false,
                        },
                        semantic_annotation_ids: [],
                        disallowed_reply_options: null,
                    },
                    features,
                }),
                method: "POST",
            }
        );
        console.log(await res.json());
    }
}

module.exports = Twitter;
