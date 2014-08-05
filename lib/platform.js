/**
 * @module bungieNetPlatform
 */
module.exports = function(jQuery, ServerVars, document) {
  Globals = {};
  Globals.ForumTopicsSortEnum = {
    Default: 0,
    LastReplied: 1,
    MostReplied: 2,
    Popularity: 3,
    Controversiality: 4,
    Liked: 5,
    HighestRated: 6
  };
  Globals.ForumTopicsCategoryFiltersEnum = {
    None: 0,
    Links: 1,
    Questions: 2,
    AnsweredQuestions: 4,
    Media: 8,
    TextOnly: 16,
    Announcement: 32,
    BungieOfficial: 64,
    Polls: 128
  };
  Globals.ForumPostCategoryEnums = {
    None: 0,
    TextOnly: 1,
    Media: 2,
    Link: 4,
    Poll: 8,
    Question: 16,
    Answered: 32,
    Announcement: 64,
    ContentComment: 128,
    BungieOfficial: 256,
    NinjaOfficial: 512
  };
  Globals.ForumTopicsQuickDateEnum = {
    All: 0,
    LastYear: 1,
    LastMonth: 2,
    LastWeek: 3,
    LastDay: 4
  };
  Globals.NotificationType = {
    MESSAGE: 1,
    FORUM_REPLY: 2,
    NEW_ACTIVITY_ROLLUP: 3,
    SETTINGS_CHANGE: 4,
    GROUP_ACCEPTANCE: 5,
    GROUP_JOIN_REQUEST: 6,
    FOLLOW_USER_ACTIVITY: 7,
    FRIEND_USER_ACTIVITY: 8,
    FORUM_LIKE: 9,
    FOLLOWED: 10,
    GROUP_BANNED: 11,
    BANNED: 12,
    UNBANNED: 13,
    GROUP_OPEN_JOIN: 14,
    GROUP_ALLIANCE_JOIN_REQUESTED: 15,
    GROUP_ALLIANCE_JOIN_REJECTED: 16,
    GROUP_ALLIANCE_JOIN_APPROVED: 17,
    GROUP_ALLIANCE_BROKEN: 18,
    GROUP_DENIAL: 19,
    WARNED: 20,
    CLAN_DISABLED: 21,
    GROUP_ALLIANCE_INVITE_REQUESTED: 22,
    GROUP_ALLIANCE_INVITE_REJECTED: 23,
    GROUP_ALLIANCE_INVITE_APPROVED: 24,
    GROUP_FOLLOWED_BY_GROUP: 25,
    GRIMOIRE_UNOBSERVED_CARDS: 26
  };
  Globals.NotificationMethod = {
    EMAIL: 1,
    MOBILE_PUSH: 2,
    WEB_ONLY: 4
  };
  Globals.GroupDateRange = {
    All: 0,
    PastDay: 1,
    PastWeek: 2,
    PastMonth: 3,
    PastYear: 4
  };
  Globals.GroupSortBy = {
    Name: 0,
    Date: 1,
    Popularity: 2,
    Id: 3
  };
  Globals.GroupHomepage = {
    Wall: 0,
    Forum: 1,
    AllianceForum: 2
  };
  Globals.TextParameterSearchType = {
    Contains: 0,
    Exact: 1,
    StartsWith: 2,
    EndsWith: 3
  };
  Globals.IgnoredItemType = {
    All: 0,
    Post: 1,
    Group: 2,
    User: 3,
    Tag: 4
  };
  Globals.IgnoreLength = {
    None: 0,
    Week: 1,
    TwoWeeks: 2,
    ThreeWeeks: 3,
    Month: 4,
    ThreeMonths: 5,
    SixMonths: 6,
    Year: 7,
    Forever: 8,
    ThreeMinutes: 9,
    Hour: 10
  };
  Globals.BungieCredentialType = {
    None: 0,
    Xuid: 1,
    Psnid: 2,
    Wlid: 3,
    Fake: 4,
    Facebook: 5,
    Google: 8,
    Windows: 9,
    DemonId: 10
  };
  Globals.ActivityAggregationType = {
    None: 0,
    Activities: 1,
    Followers: 2
  };
  Globals.ActivityType = {
    Create: 0,
    Edit: 1,
    Delete: 2,
    Rate: 3,
    Follow: 4,
    Unfollow: 5,
    Apply: 6,
    Rescind: 7,
    Approve: 8,
    Deny: 9,
    Kick: 10,
    EditMembershipType: 11,
    Like: 12,
    Unlike: 13,
    Share: 14,
    TaggedGroup: 15,
    TaggedTopic: 16,
    AvatarChanged: 17,
    DisplayNameChanged: 18,
    TitleChanged: 19,
    TitleUnlocked: 20,
    GroupTopicCreate: 21,
    GroupReplyCreate: 22,
    Reply: 23,
    ChangeClanName: 24,
    GroupAllianceRejected: 26,
    GroupAllianceApproved: 27,
    GroupAllianceBroken: 28,
    None: -1
  };
  Globals.AffectedItemType = {
    User: 0,
    Post: 1,
    Topic: 2,
    Group: 3,
    Tag: 4,
    None: -1
  };
  Globals.ActivityStatus = {
    Processing: 0,
    Failed: 1,
    Skipped: 2,
    Complete: 3
  };
  Globals.ActivityItemOrigin = {
    FollowedGroup: 0,
    FollowedUser: 1,
    ActivitiesAboutMe: 2,
    MyActivities: 3,
    Undetermined: -1
  };
  Globals.ActivityQueryFilter = {
    All: 0,
    Friends: 1,
    Following: 2,
    Groups: 3,
    Mine: 4,
    Tags: 5,
    Clans: 6
  };
  Globals.ForumFlagsEnum = {
    None: 0,
    BungieStaffPost: 1,
    ForumNinjaPost: 2,
    ForumMentorPost: 4
  };
  Globals.AclEnum = {
    None: 0,
    BNextForumNinja: 1,
    BNextUnlimitedGroups: 2,
    BNextFounderInAllGroups: 3,
    BNextBungieGold: 4,
    BNextNinjaColors: 5,
    BNextMakeOfficialTopics: 6,
    BNextMakeNinjaTopics: 7,
    BNextDeleteForumTopics: 8,
    BNextOverturnReports: 9,
    BNextBrowseReports: 10,
    BNextGlobalIgnore: 11,
    BNextEditAnyPublicPost: 12,
    BNextEditUsers: 13,
    BNextUltraBan: 14,
    BNextForumMentor: 15
  };
  Globals.IgnoreStatus = {
    NotIgnored: 0,
    IgnoredUser: 1,
    IgnoredGroup: 2,
    IgnoredByGroup: 4,
    IgnoredPost: 8,
    IgnoredTag: 16,
    IgnoredGlobal: 32
  };
  Globals.ContentDateRange = {
    All: 0,
    Today: 1,
    Yesterday: 2,
    ThisMonth: 3,
    ThisYear: 4,
    LastYear: 5,
    EarlierThanLastYear: 6
  };
  Globals.ContentSortBy = {
    CreationDate: 0,
    CmsPath: 1
  };
  Globals.FriendOnlineStatus = {
    Offline: 0,
    Online: 1,
    Idle: 2
  };
  Globals.ForumPostPopularity = {
    Empty: 0,
    Default: 1,
    Discussed: 2,
    CoolStory: 3,
    HeatingUp: 4,
    Hot: 5
  };
  Globals.MembershipOption = {
    Reviewed: 0,
    Open: 1,
    Closed: 2
  };
  Globals.SuccessMessages = {
    Following: 1,
    Unfollowing: 2,
    ManagingGroupMembers: 8,
    UpdatingSettings: 16,
    ManagingGroups: 32
  };
  Globals.ExternalService = {
    None: 0,
    Twitter: 1,
    Facebook: 2,
    Youtube: 3,
    TwitterHelp: 4
  };
  Globals.ForumPostSortEnum = {
    Default: 0,
    OldestFirst: 1
  };
  Globals.SurveyCompletionFlags = {
    None: 0,
    UserResearchWebPageOne: 1,
    UserResearchWebPageTwo: 2
  };
  Globals.DestinyGender = {
    Male: 0,
    Female: 1,
    Unknown: 2
  };
  Globals.DestinyRace = {
    Human: 0,
    Awoken: 1,
    Exo: 2,
    Unknown: 3
  };
  Globals.DestinyClass = {
    Titan: 0,
    Hunter: 1,
    Warlock: 2,
    Unknown: 3
  };
  Globals.ItemBindStatus = {
    NotBound: 0,
    BoundToCharacter: 1,
    BoundToAccount: 2,
    BoundToGuild: 3
  };
  Globals.TierType = {
    Unknown: 0,
    Currency: 1,
    Basic: 2,
    Common: 3,
    Rare: 4,
    Superior: 5,
    Exotic: 6
  };
  Globals.GroupTypeSearchFilter = {
    All: 0,
    Group: 1,
    Clan: 2
  };
  Globals.GroupMemberCountFilter = {
    All: 0,
    OneToTen: 1,
    ElevenToOneHundred: 2,
    GreaterThanOneHundred: 3
  };
  Globals.PeriodType = {
    None: 0,
    Daily: 1,
    Monthly: 2,
    AllTime: 3,
    Activity: 4
  };
  Globals.DestinyStatsGroupType = {
    None: 0,
    General: 1,
    Weapons: 2,
    Medals: 3,
    Enemies: 4,
    ReservedGroups: 100,
    Leaderboard: 101,
    Activity: 102,
    UniqueWeapon: 103
  };
  Globals.DestinyActivityModeType = {
    None: 0,
    Story: 2,
    Strike: 3,
    Raid: 4,
    AllPvP: 5,
    Explore: 6,
    AllPvE: 7,
    PvPIntroduction: 8,
    ThreeVsThree: 9,
    Control: 10,
    Lockdown: 11,
    Team: 12,
    FreeForAll: 13
  };
  Globals.StatFeedbackState = {
    Good: 0,
    TooHigh: 1,
    TooLow: 2,
    WrongName: 4
  };
  Globals.RequestedPunishment = {
    Ban: 0,
    Warn: 1,
    BlastBan: 2
  };
  Globals.PlatformErrorCodes = {
    None: 0,
    Success: 1,
    TransportException: 2,
    UnhandledException: 3,
    NotImplemented: 4,
    SystemDisabled: 5,
    FailedToLoadAvailableLocalesConfiguration: 6,
    ParameterParseFailure: 7,
    ParameterInvalidRange: 8,
    BadRequest: 9,
    AuthenticationInvalid: 10,
    DataNotFound: 11,
    InsufficientPrivileges: 12,
    Duplicate: 13,
    UnknownSqlResult: 14,
    ValidationError: 15,
    ValidationMissingFieldError: 16,
    ValidationInvalidInputError: 17,
    InvalidParameters: 18,
    ParameterNotFound: 19,
    UnhandledHttpException: 20,
    NotFound: 21,
    WebAuthModuleAsyncFailed: 22,
    InvalidReturnValue: 23,
    UserBanned: 24,
    InvalidPostBody: 25,
    MissingPostBody: 26,
    ExternalServiceTimeout: 27,
    ValidationLengthError: 28,
    ValidationRangeError: 29,
    JsonDeserializationError: 30,
    ThrottleLimitExceeded: 31,
    ValidationTagError: 32,
    ValidationProfanityError: 33,
    ValidationUrlFormatError: 34,
    ThrottleLimitExceededMinutes: 35,
    ThrottleLimitExceededMomentarily: 36,
    ThrottleLimitExceededSeconds: 37,
    ExternalServiceUnknown: 38,
    ValidationWordLengthError: 39,
    ValidationInvisibleUnicode: 40,
    ValidationBadNames: 41,
    ExternalServiceFailed: 42,
    ServiceRetired: 43,
    UnknownSqlException: 44,
    UnsupportedLocale: 45,
    InvalidPageNumber: 46,
    MaximumPageSizeExceeded: 47,
    ServiceUnsupported: 48,
    UnableToUnPairMobileApp: 90,
    UnableToPairMobileApp: 91,
    CannotUseMobileAuthWithNonMobileProvider: 92,
    MissingDeviceCookie: 93,
    FacebookTokenExpired: 94,
    AuthTicketRequired: 95,
    CookieContextRequired: 96,
    UnknownAuthenticationError: 97,
    BungieNetAccountCreationRequired: 98,
    WebAuthRequired: 99,
    ContentUnknownSqlResult: 100,
    ContentNeedUniquePath: 101,
    ContentSqlException: 102,
    ContentNotFound: 103,
    ContentSuccessWithTagAddFail: 104,
    ContentSearchMissingParameters: 105,
    ContentInvalidId: 106,
    ContentPhysicalFileDeletionError: 107,
    ContentPhysicalFileCreationError: 108,
    ContentPerforceSubmissionError: 109,
    ContentPerforceInitializationError: 110,
    ContentDeploymentPackageNotReadyError: 111,
    ContentUploadFailed: 112,
    ContentTooManyResults: 113,
    ContentInvalidState: 115,
    ContentNavigationParentNotFound: 116,
    ContentNavigationParentUpdateError: 117,
    DeploymentPackageNotEditable: 118,
    ContentValidationError: 119,
    ContentPropertiesValidationError: 120,
    ContentTypeNotFound: 121,
    DeploymentPackageNotFound: 122,
    ContentSearchInvalidParameters: 123,
    ContentItemPropertyAggregationError: 124,
    DeploymentPackageFileNotFound: 125,
    ContentPerforceFileHistoryNotFound: 126,
    ContentAssetZipCreationFailure: 127,
    ContentAssetZipCreationBusy: 128,
    ContentProjectNotFound: 129,
    ContentFolderNotFound: 130,
    ContentPackagesInconsistent: 131,
    ContentPackagesInvalidState: 132,
    ContentPackagesInconsistentType: 133,
    ContentCannotDeletePackage: 134,
    ContentLockedForChanges: 135,
    ContentFileUploadFailed: 136,
    ContentNotReviewed: 137,
    ContentPermissionDenied: 138,
    ContentInvalidExternalUrl: 139,
    ContentExternalFileCannotBeImportedLocally: 140,
    ContentTagSaveFailure: 141,
    ContentPerforceUnmatchedFileError: 142,
    ContentPerforceChangelistResultNotFound: 143,
    ContentPerforceChangelistFileItemsNotFound: 144,
    ContentPerforceInvalidRevisionError: 145,
    ContentUnloadedSaveResult: 146,
    ContentPropertyInvalidNumber: 147,
    ContentPropertyInvalidUrl: 148,
    ContentPropertyInvalidDate: 149,
    ContentPropertyInvalidSet: 150,
    ContentPropertyCannotDeserialize: 151,
    ContentRegexValidationFailOnProperty: 152,
    ContentMaxLengthFailOnProperty: 153,
    ContentPropertyUnexpectedDeserializationError: 154,
    ContentPropertyRequired: 155,
    ContentCannotCreateFile: 156,
    ContentInvalidMigrationFile: 157,
    ContentMigrationAlteringProcessedItem: 158,
    ContentPropertyDefinitionNotFound: 159,
    ContentReviewDataChanged: 160,
    ContentRollbackRevisionNotInPackage: 161,
    ContentItemNotBasedOnLatestRevision: 162,
    ContentUnauthorized: 163,
    ContentCannotCreateDeploymentPackage: 164,
    ContentUserNotFound: 165,
    ContentLocalePermissionDenied: 166,
    ContentInvalidLinkToInternalEnvironment: 167,
    ContentInvalidBlacklistedContent: 168,
    UserNonUniqueName: 200,
    UserManualLinkingStepRequired: 201,
    UserCreateUnknownSqlResult: 202,
    UserCreateUnknownSqlException: 203,
    UserMalformedMembershipId: 204,
    UserCannotFindRequestedUser: 205,
    UserCannotLoadAccountCredentialLinkInfo: 206,
    UserInvalidMobileAppType: 207,
    UserMissingMobilePairingInfo: 208,
    UserCannotGenerateMobileKeyWhileUsingMobileCredential: 209,
    UserGenerateMobileKeyExistingSlotCollision: 210,
    UserDisplayNameMissingOrInvalid: 211,
    UserCannotLoadAccountProfileData: 212,
    UserCannotSaveUserProfileData: 213,
    UserEmailMissingOrInvalid: 214,
    UserTermsOfUseRequired: 215,
    UserCannotCreateNewAccountWhileLoggedIn: 216,
    UserCannotResolveCentralAccount: 217,
    UserInvalidAvatar: 218,
    UserMissingCreatedUserResult: 219,
    UserCannotChangeUniqueNameYet: 220,
    UserCannotChangeDisplayNameYet: 221,
    UserCannotChangeEmail: 222,
    UserUniqueNameMustStartWithLetter: 223,
    UserNoLinkedAccountsSupportFriendListings: 224,
    UserAcknowledgmentTableFull: 225,
    MessagingUnknownError: 300,
    MessagingSelfError: 301,
    MessagingSendThrottle: 302,
    MessagingNoBody: 303,
    MessagingTooManyUsers: 304,
    MessagingCanNotLeaveConversation: 305,
    MessagingUnableToSend: 306,
    MessagingDeletedUserForbidden: 307,
    MessagingCannotDeleteExternalConversation: 308,
    MessagingGroupChatDisabled: 309,
    MessagingMustIncludeSelfInPrivateMessage: 310,
    AddSurveyAnswersUnknownSqlException: 400,
    ForumBodyCannotBeEmpty: 500,
    ForumSubjectCannotBeEmptyOnTopicPost: 501,
    ForumCannotLocateParentPost: 502,
    ForumThreadLockedForReplies: 503,
    ForumUnknownSqlResultDuringCreatePost: 504,
    ForumUnknownTagCreationError: 505,
    ForumUnknownSqlResultDuringTagItem: 506,
    ForumUnknownExceptionCreatePost: 507,
    ForumQuestionMustBeTopicPost: 508,
    ForumExceptionDuringTagSearch: 509,
    ForumExceptionDuringTopicRetrieval: 510,
    ForumAliasedTagError: 511,
    ForumCannotLocateThread: 512,
    ForumUnknownExceptionEditPost: 513,
    ForumCannotLocatePost: 514,
    ForumUnknownExceptionGetOrCreateTags: 515,
    ForumEditPermissionDenied: 516,
    ForumUnknownSqlResultDuringTagIdRetrieval: 517,
    ForumCannotGetRating: 518,
    ForumUnknownExceptionGetRating: 519,
    ForumRatingsAccessError: 520,
    ForumRelatedPostAccessError: 521,
    ForumLatestReplyAccessError: 522,
    ForumUserStatusAccessError: 523,
    ForumAuthorAccessError: 524,
    ForumGroupAccessError: 525,
    ForumUrlExpectedButMissing: 526,
    ForumRepliesCannotBeEmpty: 527,
    ForumRepliesCannotBeInDifferentGroups: 528,
    ForumSubTopicCannotBeCreatedAtThisThreadLevel: 529,
    ForumCannotCreateContentTopic: 530,
    ForumTopicDoesNotExist: 531,
    ForumContentCommentsNotAllowed: 532,
    ForumUnknownSqlResultDuringEditPost: 533,
    ForumUnknownSqlResultDuringGetPost: 534,
    ForumPostValidationBadUrl: 535,
    ForumBodyTooLong: 536,
    ForumSubjectTooLong: 537,
    ForumAnnouncementNotAllowed: 538,
    ForumCannotShareOwnPost: 539,
    ForumEditNoOp: 540,
    ForumUnknownDatabaseErrorDuringGetPost: 541,
    ForumExceeedMaximumRowLimit: 542,
    ForumCannotSharePrivatePost: 543,
    ForumCannotCrossPostBetweenGroups: 544,
    ForumIncompatibleCategories: 555,
    ForumCannotUseTheseCategoriesOnNonTopicPost: 556,
    ForumCanOnlyDeleteTopics: 557,
    ForumDeleteSqlException: 558,
    ForumDeleteSqlUnknownResult: 559,
    ForumTooManyTags: 560,
    ForumCanOnlyRateTopics: 561,
    ForumBannedPostsCannotBeEdited: 562,
    ForumThreadRootIsBanned: 563,
    ForumCannotUseOfficialTagCategoryAsTag: 564,
    ForumAnswerCannotBeMadeOnCreatePost: 565,
    ForumAnswerCannotBeMadeOnEditPost: 566,
    ForumAnswerPostIdIsNotADirectReplyOfQuestion: 567,
    ForumAnswerTopicIdIsNotAQuestion: 568,
    ForumUnknownExceptionDuringMarkAnswer: 569,
    ForumUnknownSqlResultDuringMarkAnswer: 570,
    ForumCannotRateYourOwnPosts: 571,
    ForumPollsMustBeTheFirstPostInTopic: 572,
    ForumInvalidPollInput: 573,
    ForumGroupAdminEditNonMember: 574,
    ForumCannotEditModeratorEditedPost: 575,
    ForumRequiresDestinyMembership: 576,
    ForumUnexpectedError: 577,
    GroupMembershipApplicationAlreadyResolved: 601,
    GroupMembershipAlreadyApplied: 602,
    GroupMembershipInsufficientPrivileges: 603,
    GroupIdNotReturnedFromCreation: 604,
    GroupSearchInvalidParameters: 605,
    GroupMembershipPendingApplicationNotFound: 606,
    GroupInvalidId: 607,
    GroupInvalidMembershipId: 608,
    GroupInvalidMembershipType: 609,
    GroupMissingTags: 610,
    GroupMembershipNotFound: 611,
    GroupInvalidRating: 612,
    GroupUserFollowingAccessError: 613,
    GroupUserMembershipAccessError: 614,
    GroupCreatorAccessError: 615,
    GroupAdminAccessError: 616,
    GroupPrivatePostNotViewable: 617,
    GroupMembershipNotLoggedIn: 618,
    GroupNotDeleted: 619,
    GroupUnknownErrorUndeletingGroup: 620,
    GroupDeleted: 621,
    GroupNotFound: 622,
    GroupMemberBanned: 623,
    GroupMembershipClosed: 624,
    GroupPrivatePostOverrideError: 625,
    GroupNameTaken: 626,
    GroupDeletionGracePeriodExpired: 627,
    GroupCannotCheckBanStatus: 628,
    GroupMaximumMembershipCountReached: 629,
    NoDestinyAccountForClanPlatform: 630,
    AlreadyRequestingMembershipForClanPlatform: 631,
    AlreadyClanMemberOnPlatform: 632,
    GroupJoinedCannotSetClanName: 633,
    GroupLeftCannotClearClanName: 634,
    GroupRelationshipRequestPending: 635,
    GroupRelationshipRequestBlocked: 636,
    GroupRelationshipRequestNotFound: 637,
    GroupRelationshipBlockNotFound: 638,
    GroupRelationshipNotFound: 639,
    GroupAlreadyAllied: 641,
    GroupAlreadyMember: 642,
    GroupRelationshipAlreadyExists: 643,
    InvalidGroupTypesForRelationshipRequest: 644,
    GroupAtMaximumAlliances: 646,
    GroupCannotSetClanOnlySettings: 647,
    ClanCannotSetTwoDefaultPostTypes: 648,
    GroupMemberInvalidMemberType: 649,
    GroupInvalidPlatformType: 650,
    GroupMemberInvalidSort: 651,
    GroupInvalidResolveState: 652,
    ClanAlreadyEnabledForPlatform: 653,
    ClanNotEnabledForPlatform: 654,
    ClanEnabledButCouldNotJoinNoAccount: 655,
    ClanEnabledButCouldNotJoinAlreadyMember: 656,
    ClanCannotJoinNoCredential: 657,
    NoClanMembershipForPlatform: 658,
    GroupToGroupFollowLimitReached: 659,
    ChildGroupAlreadyInAlliance: 660,
    OwnerGroupAlreadyInAlliance: 661,
    AllianceOwnerCannotJoinAlliance: 662,
    GroupNotInAlliance: 663,
    ChildGroupCannotInviteToAlliance: 664,
    GroupToGroupAlreadyFollowed: 665,
    GroupToGroupNotFollowing: 666,
    ClanMaximumMembershipReached: 667,
    ClanNameNotValid: 668,
    ClanNameNotValidError: 669,
    AllianceOwnerNotDefined: 670,
    AllianceChildNotDefined: 671,
    ActivitiesUnknownException: 701,
    ActivitiesParameterNull: 702,
    ActivityCountsDiabled: 703,
    ActivitySearchInvalidParameters: 704,
    ActivityPermissionDenied: 705,
    ShareAlreadyShared: 706,
    ActivityLoggingDisabled: 707,
    ItemAlreadyFollowed: 801,
    ItemNotFollowed: 802,
    CannotFollowSelf: 803,
    GroupFollowLimitExceeded: 804,
    TagFollowLimitExceeded: 805,
    UserFollowLimitExceeded: 806,
    NoValidTagsInList: 900,
    BelowMinimumSuggestionLength: 901,
    CannotGetSuggestionsOnMultipleTagsSimultaneously: 902,
    NotAValidPartialTag: 903,
    TagSuggestionsUnknownSqlResult: 904,
    TagsUnableToLoadPopularTagsFromDatabase: 905,
    TagInvalid: 906,
    TagNotFound: 907,
    SingleTagExpected: 908,
    IgnoreInvalidParameters: 1e3,
    IgnoreSqlException: 1001,
    IgnoreErrorRetrievingGroupPermissions: 1002,
    IgnoreErrorInsufficientPermission: 1003,
    IgnoreErrorRetrievingItem: 1004,
    IgnoreCannotIgnoreSelf: 1005,
    IgnoreIllegalType: 1006,
    IgnoreNotFound: 1007,
    IgnoreUserGloballyIgnored: 1008,
    IgnoreUserIgnored: 1009,
    NotificationSettingInvalid: 1100,
    PSNExExpiredTicket: 1204,
    PSNExForbidden: 1205,
    PSNExSystemDisabled: 1218,
    PSNFriendsMissingTicket: 1219,
    PsnApiErrorCodeUnknown: 1223,
    PsnApiErrorWebException: 1224,
    PsnApiBadRequest: 1225,
    PsnApiAccessTokenRequired: 1226,
    PsnApiInvalidAccessToken: 1227,
    PsnApiExpiredAccessToken: 1228,
    PsnApiBannedUser: 1229,
    PsnApiAccountUpgradeRequired: 1230,
    PsnApiServiceTemporarilyUnavailable: 1231,
    PsnApiServerBusy: 1232,
    PsnApiUnderMaintenance: 1233,
    PsnApiProfileUserNotFound: 1234,
    PsnApiProfilePrivacyRestriction: 1235,
    PsnApiProfileUnderMaintenance: 1236,
    PsnApiAccountAttributeMissing: 1237,
    XblExSystemDisabled: 1300,
    XblExUnknownError: 1301,
    ReportNotYetResolved: 1400,
    ReportOverturnDoesNotChangeDecision: 1401,
    ReportNotFound: 1402,
    ReportAlreadyReported: 1403,
    ReportInvalidResolution: 1404,
    LegacyGameStatsSystemDisabled: 1500,
    LegacyGameStatsUnknownError: 1501,
    LegacyGameStatsMalformedSneakerNetCode: 1502,
    DestinyAccountAcquisitionFailure: 1600,
    DestinyAccountNotFound: 1601,
    DestinyBuildStatsDatabaseError: 1602,
    DestinyCharacterStatsDatabaseError: 1603,
    DestinyPvPStatsDatabaseError: 1604,
    DestinyPvEStatsDatabaseError: 1605,
    DestinyGrimoireStatsDatabaseError: 1606,
    DestinyStatsParameterMembershipTypeParseError: 1607,
    DestinyStatsParameterMembershipIdParseError: 1608,
    DestinyStatsParameterRangeParseError: 1609,
    DestinyStringItemHashNotFound: 1610,
    DestinyStringSetNotFound: 1611,
    DestinyContentLookupNotFoundForKey: 1612,
    DestinyContentItemNotFound: 1613,
    DestinyContentSectionNotFound: 1614,
    DestinyContentPropertyNotFound: 1615,
    DestinyContentConfigNotFound: 1616,
    DestinyContentPropertyBucketValueNotFound: 1617,
    DestinyUnexpectedError: 1618,
    DestinyInvalidAction: 1619,
    DestinyCharacterNotFound: 1620,
    DestinyInvalidFlag: 1621,
    DestinyInvalidRequest: 1622,
    DestinyItemNotFound: 1623,
    DestinyInvalidCustomizationChoices: 1624,
    DestinyVendorItemNotFound: 1625,
    DestinyInternalError: 1626,
    DestinyVendorNotFound: 1627,
    DestinyRecentActivitiesDatabaseError: 1628,
    DestinyItemBucketNotFound: 1629,
    DestinyInvalidMembershipType: 1630,
    DestinyVersionIncompatibility: 1631,
    DestinyItemAlreadyInInventory: 1632,
    DestinyBucketNotFound: 1633,
    DestinyCharacterNotInTower: 1634,
    DestinyCharacterNotLoggedIn: 1635,
    DestinyDefinitionsNotLoaded: 1636,
    DestinyInventoryFull: 1637,
    DestinyItemFailedLevelCheck: 1638,
    DestinyItemFailedUnlockCheck: 1639,
    DestinyItemUnequippable: 1640,
    DestinyItemUniqueEquipRestricted: 1641,
    DestinyNoRoomInDestination: 1642,
    DestinyServiceFailure: 1643,
    DestinyServiceRetired: 1644,
    DestinyTransferFailed: 1645,
    DestinyTransferNotFoundForSourceBucket: 1646,
    DestinyUnexpectedResultInVendorTransferCheck: 1647,
    DestinyUniquenessViolation: 1648,
    DestinyErrorDeserializationFailure: 1649,
    DestinyValidAccountTicketRequired: 1650,
    DestinyShardRelayClientTimeout: 1651,
    DestinyShardRelayProxyTimeout: 1652,
    FbInvalidRequest: 1800,
    FbRedirectMismatch: 1801,
    FbAccessDenied: 1802,
    FbUnsupportedResponseType: 1803,
    FbInvalidScope: 1804,
    FbUnsupportedGrantType: 1805,
    FbInvalidGrant: 1806,
    InvitationExpired: 1900,
    InvitationUnknownType: 1901,
    InvitationInvalidResponseStatus: 1902,
    InvitationInvalidType: 1903,
    InvitationAlreadyPending: 1904,
    InvitationInsufficientPermission: 1905,
    InvitationInvalidCode: 1906,
    InvitationInvalidTargetState: 1907,
    InvitationCannotBeReactivated: 1908,
    InvitationAutoApproved: 1909,
    InvitationNoRecipients: 1910,
    InvitationGroupCannotSendToSelf: 1911,
    InvitationTooManyRecipients: 1912,
    InvitationInvalid: 1913,
    InvitationNotFound: 1914,
    TokenInvalid: 2e3,
    TokenBadFormat: 2001,
    TokenAlreadyClaimed: 2002,
    TokenAlreadyClaimedSelf: 2003,
    TokenThrottling: 2004,
    TokenUnknownRedemptionFailure: 2005,
    TokenPurchaseClaimFailedAfterTokenClaimed: 2006,
    TokenUserAlreadyOwnsOffer: 2007,
    TokenInvalidOfferKey: 2008,
    TokenEmailNotValidated: 2009,
    TokenProvisioningBadVendorOrOffer: 2010,
    TokenPurchaseHistoryUnknownError: 2011,
    TokenThrottleStateUnknownError: 2012,
    TokenUserAgeNotVerified: 2013,
    TokenExceededOfferMaximum: 2014,
    TokenNoAvailableUnlocks: 2015,
    TokenMarketplaceInvalidPlatform: 2016,
    TokenNoMarketplaceCodesFound: 2017,
    TokenOfferNotAvailableForRedemption: 2018,
    TokenUnlockPartialFailure: 2019,
    TokenMarketplaceInvalidRegion: 2020
  };
  Globals.BucketCategory = {
    Invisible: 0,
    Item: 1,
    Currency: 2,
    Equippable: 3,
    Ignored: 4
  };
  Globals.BungieMembershipType = {
    None: 0,
    TigerXbox: 1,
    TigerPsn: 2,
    TigerDemon: 10,
    BungieNext: 254,
    All: -1
  };
  Globals.ReportResolutionStatus = {
    Unresolved: 0,
    Innocent: 1,
    GuiltyBan: 2,
    GuiltyBlastBan: 3,
    GuiltyWarn: 4,
    GuiltyAlias: 5
  };
  Globals.ForumTypeEnum = {
    Public: 0,
    News: 1,
    Group: 2,
    Alliance: 3
  };
  Globals.DamageType = {
    None: 0,
    Kinetic: 1,
    Arc: 2,
    Thermal: 3,
    Void: 4,
    Raid: 5
  };
  Globals.DestinyTalentNodeState = {
    Invalid: 0,
    CanUpgrade: 1,
    NoPoints: 2,
    NoPrerequisites: 3,
    NoSteps: 4,
    NoUnlock: 5,
    NoMaterial: 6,
    NoGridLevel: 7,
    SwappingLocked: 8,
    MustSwap: 9,
    Complete: 10,
    Unknown: 11
  };
  Globals.OfferRedeemMode = {
    Off: 0,
    Unlock: 1,
    Platform: 2
  };
  Globals.ClientDeviceType = {
    Unknown: 0,
    Xbox360: 1,
    Playstation3: 2,
    AndroidPhone: 3,
    AndroidTablet: 4,
    ApplePhone: 5,
    AppleTablet: 6,
    WebBrowser: 7,
    NativeWindows: 8,
    NativeMac: 9,
    WindowsPhone: 10,
    WindowsTablet: 11,
    XboxOne: 12,
    Playstation4: 13,
    Fake: 255
  };
  Globals.OptInFlags = {
    Newsletter: 1,
    System: 2,
    Marketing: 4,
    UserResearch: 8,
    CustomerService: 16
  };
  Globals.EquipFailureReason = {
    None: 0,
    ItemUnequippable: 1,
    ItemUniqueEquipRestricted: 2,
    ItemFailedUnlockCheck: 4,
    ItemFailedLevelCheck: 8,
    ItemNotOnCharacter: 16
  };
  Globals.UnitType = {
    None: 0,
    Count: 1,
    PerGame: 2,
    Seconds: 3,
    Points: 4,
    Team: 5,
    Distance: 6,
    Percent: 7,
    Ratio: 8,
    Boolean: 9,
    WeaponType: 10
  };
  Globals.EntityType = {
    None: 0,
    User: 1,
    Group: 2,
    Post: 3,
    Invitation: 4,
    Report: 5,
    Activity: 6,
    Conversation: 7
  };
  Globals.InvitationResponseState = {
    Unreviewed: 0,
    Approved: 1,
    Rejected: 2
  };
  ReverseGlobals = {};
  ReverseGlobals.ForumTopicsSortEnum = {
    "0": "Default",
    "1": "LastReplied",
    "2": "MostReplied",
    "3": "Popularity",
    "4": "Controversiality",
    "5": "Liked",
    "6": "HighestRated"
  };
  ReverseGlobals.ForumTopicsCategoryFiltersEnum = {
    "0": "None",
    "1": "Links",
    "2": "Questions",
    "4": "AnsweredQuestions",
    "8": "Media",
    "16": "TextOnly",
    "32": "Announcement",
    "64": "BungieOfficial",
    "128": "Polls"
  };
  ReverseGlobals.ForumPostCategoryEnums = {
    "0": "None",
    "1": "TextOnly",
    "2": "Media",
    "4": "Link",
    "8": "Poll",
    "16": "Question",
    "32": "Answered",
    "64": "Announcement",
    "128": "ContentComment",
    "256": "BungieOfficial",
    "512": "NinjaOfficial"
  };
  ReverseGlobals.ForumTopicsQuickDateEnum = {
    "0": "All",
    "1": "LastYear",
    "2": "LastMonth",
    "3": "LastWeek",
    "4": "LastDay"
  };
  ReverseGlobals.NotificationType = {
    "1": "MESSAGE",
    "2": "FORUM_REPLY",
    "3": "NEW_ACTIVITY_ROLLUP",
    "4": "SETTINGS_CHANGE",
    "5": "GROUP_ACCEPTANCE",
    "6": "GROUP_JOIN_REQUEST",
    "7": "FOLLOW_USER_ACTIVITY",
    "8": "FRIEND_USER_ACTIVITY",
    "9": "FORUM_LIKE",
    "10": "FOLLOWED",
    "11": "GROUP_BANNED",
    "12": "BANNED",
    "13": "UNBANNED",
    "14": "GROUP_OPEN_JOIN",
    "15": "GROUP_ALLIANCE_JOIN_REQUESTED",
    "16": "GROUP_ALLIANCE_JOIN_REJECTED",
    "17": "GROUP_ALLIANCE_JOIN_APPROVED",
    "18": "GROUP_ALLIANCE_BROKEN",
    "19": "GROUP_DENIAL",
    "20": "WARNED",
    "21": "CLAN_DISABLED",
    "22": "GROUP_ALLIANCE_INVITE_REQUESTED",
    "23": "GROUP_ALLIANCE_INVITE_REJECTED",
    "24": "GROUP_ALLIANCE_INVITE_APPROVED",
    "25": "GROUP_FOLLOWED_BY_GROUP",
    "26": "GRIMOIRE_UNOBSERVED_CARDS"
  };
  ReverseGlobals.NotificationMethod = {
    "1": "EMAIL",
    "2": "MOBILE_PUSH",
    "4": "WEB_ONLY"
  };
  ReverseGlobals.GroupDateRange = {
    "0": "All",
    "1": "PastDay",
    "2": "PastWeek",
    "3": "PastMonth",
    "4": "PastYear"
  };
  ReverseGlobals.GroupSortBy = {
    "0": "Name",
    "1": "Date",
    "2": "Popularity",
    "3": "Id"
  };
  ReverseGlobals.GroupHomepage = {
    "0": "Wall",
    "1": "Forum",
    "2": "AllianceForum"
  };
  ReverseGlobals.TextParameterSearchType = {
    "0": "Contains",
    "1": "Exact",
    "2": "StartsWith",
    "3": "EndsWith"
  };
  ReverseGlobals.IgnoredItemType = {
    "0": "All",
    "1": "Post",
    "2": "Group",
    "3": "User",
    "4": "Tag"
  };
  ReverseGlobals.IgnoreLength = {
    "0": "None",
    "1": "Week",
    "2": "TwoWeeks",
    "3": "ThreeWeeks",
    "4": "Month",
    "5": "ThreeMonths",
    "6": "SixMonths",
    "7": "Year",
    "8": "Forever",
    "9": "ThreeMinutes",
    "10": "Hour"
  };
  ReverseGlobals.BungieCredentialType = {
    "0": "None",
    "1": "Xuid",
    "2": "Psnid",
    "3": "Wlid",
    "4": "Fake",
    "5": "Facebook",
    "8": "Google",
    "9": "Windows",
    "10": "DemonId"
  };
  ReverseGlobals.ActivityAggregationType = {
    "0": "None",
    "1": "Activities",
    "2": "Followers"
  };
  ReverseGlobals.ActivityType = {
    "0": "Create",
    "1": "Edit",
    "2": "Delete",
    "3": "Rate",
    "4": "Follow",
    "5": "Unfollow",
    "6": "Apply",
    "7": "Rescind",
    "8": "Approve",
    "9": "Deny",
    "10": "Kick",
    "11": "EditMembershipType",
    "12": "Like",
    "13": "Unlike",
    "14": "Share",
    "15": "TaggedGroup",
    "16": "TaggedTopic",
    "17": "AvatarChanged",
    "18": "DisplayNameChanged",
    "19": "TitleChanged",
    "20": "TitleUnlocked",
    "21": "GroupTopicCreate",
    "22": "GroupReplyCreate",
    "23": "Reply",
    "24": "ChangeClanName",
    "26": "GroupAllianceRejected",
    "27": "GroupAllianceApproved",
    "28": "GroupAllianceBroken",
    "-1": "None"
  };
  ReverseGlobals.AffectedItemType = {
    "0": "User",
    "1": "Post",
    "2": "Topic",
    "3": "Group",
    "4": "Tag",
    "-1": "None"
  };
  ReverseGlobals.ActivityStatus = {
    "0": "Processing",
    "1": "Failed",
    "2": "Skipped",
    "3": "Complete"
  };
  ReverseGlobals.ActivityItemOrigin = {
    "0": "FollowedGroup",
    "1": "FollowedUser",
    "2": "ActivitiesAboutMe",
    "3": "MyActivities",
    "-1": "Undetermined"
  };
  ReverseGlobals.ActivityQueryFilter = {
    "0": "All",
    "1": "Friends",
    "2": "Following",
    "3": "Groups",
    "4": "Mine",
    "5": "Tags",
    "6": "Clans"
  };
  ReverseGlobals.ForumFlagsEnum = {
    "0": "None",
    "1": "BungieStaffPost",
    "2": "ForumNinjaPost",
    "4": "ForumMentorPost"
  };
  ReverseGlobals.AclEnum = {
    "0": "None",
    "1": "BNextForumNinja",
    "2": "BNextUnlimitedGroups",
    "3": "BNextFounderInAllGroups",
    "4": "BNextBungieGold",
    "5": "BNextNinjaColors",
    "6": "BNextMakeOfficialTopics",
    "7": "BNextMakeNinjaTopics",
    "8": "BNextDeleteForumTopics",
    "9": "BNextOverturnReports",
    "10": "BNextBrowseReports",
    "11": "BNextGlobalIgnore",
    "12": "BNextEditAnyPublicPost",
    "13": "BNextEditUsers",
    "14": "BNextUltraBan",
    "15": "BNextForumMentor"
  };
  ReverseGlobals.IgnoreStatus = {
    "0": "NotIgnored",
    "1": "IgnoredUser",
    "2": "IgnoredGroup",
    "4": "IgnoredByGroup",
    "8": "IgnoredPost",
    "16": "IgnoredTag",
    "32": "IgnoredGlobal"
  };
  ReverseGlobals.ContentDateRange = {
    "0": "All",
    "1": "Today",
    "2": "Yesterday",
    "3": "ThisMonth",
    "4": "ThisYear",
    "5": "LastYear",
    "6": "EarlierThanLastYear"
  };
  ReverseGlobals.ContentSortBy = {
    "0": "CreationDate",
    "1": "CmsPath"
  };
  ReverseGlobals.FriendOnlineStatus = {
    "0": "Offline",
    "1": "Online",
    "2": "Idle"
  };
  ReverseGlobals.ForumPostPopularity = {
    "0": "Empty",
    "1": "Default",
    "2": "Discussed",
    "3": "CoolStory",
    "4": "HeatingUp",
    "5": "Hot"
  };
  ReverseGlobals.MembershipOption = {
    "0": "Reviewed",
    "1": "Open",
    "2": "Closed"
  };
  ReverseGlobals.SuccessMessages = {
    "1": "Following",
    "2": "Unfollowing",
    "8": "ManagingGroupMembers",
    "16": "UpdatingSettings",
    "32": "ManagingGroups"
  };
  ReverseGlobals.ExternalService = {
    "0": "None",
    "1": "Twitter",
    "2": "Facebook",
    "3": "Youtube",
    "4": "TwitterHelp"
  };
  ReverseGlobals.ForumPostSortEnum = {
    "0": "Default",
    "1": "OldestFirst"
  };
  ReverseGlobals.SurveyCompletionFlags = {
    "0": "None",
    "1": "UserResearchWebPageOne",
    "2": "UserResearchWebPageTwo"
  };
  ReverseGlobals.DestinyGender = {
    "0": "Male",
    "1": "Female",
    "2": "Unknown"
  };
  ReverseGlobals.DestinyRace = {
    "0": "Human",
    "1": "Awoken",
    "2": "Exo",
    "3": "Unknown"
  };
  ReverseGlobals.DestinyClass = {
    "0": "Titan",
    "1": "Hunter",
    "2": "Warlock",
    "3": "Unknown"
  };
  ReverseGlobals.ItemBindStatus = {
    "0": "NotBound",
    "1": "BoundToCharacter",
    "2": "BoundToAccount",
    "3": "BoundToGuild"
  };
  ReverseGlobals.TierType = {
    "0": "Unknown",
    "1": "Currency",
    "2": "Basic",
    "3": "Common",
    "4": "Rare",
    "5": "Superior",
    "6": "Exotic"
  };
  ReverseGlobals.GroupTypeSearchFilter = {
    "0": "All",
    "1": "Group",
    "2": "Clan"
  };
  ReverseGlobals.GroupMemberCountFilter = {
    "0": "All",
    "1": "OneToTen",
    "2": "ElevenToOneHundred",
    "3": "GreaterThanOneHundred"
  };
  ReverseGlobals.PeriodType = {
    "0": "None",
    "1": "Daily",
    "2": "Monthly",
    "3": "AllTime",
    "4": "Activity"
  };
  ReverseGlobals.DestinyStatsGroupType = {
    "0": "None",
    "1": "General",
    "2": "Weapons",
    "3": "Medals",
    "4": "Enemies",
    "100": "ReservedGroups",
    "101": "Leaderboard",
    "102": "Activity",
    "103": "UniqueWeapon"
  };
  ReverseGlobals.DestinyActivityModeType = {
    "0": "None",
    "2": "Story",
    "3": "Strike",
    "4": "Raid",
    "5": "AllPvP",
    "6": "Explore",
    "7": "AllPvE",
    "8": "PvPIntroduction",
    "9": "ThreeVsThree",
    "10": "Control",
    "11": "Lockdown",
    "12": "Team",
    "13": "FreeForAll"
  };
  ReverseGlobals.StatFeedbackState = {
    "0": "Good",
    "1": "TooHigh",
    "2": "TooLow",
    "4": "WrongName"
  };
  ReverseGlobals.RequestedPunishment = {
    "0": "Ban",
    "1": "Warn",
    "2": "BlastBan"
  };
  ReverseGlobals.PlatformErrorCodes = {
    "0": "None",
    "1": "Success",
    "2": "TransportException",
    "3": "UnhandledException",
    "4": "NotImplemented",
    "5": "SystemDisabled",
    "6": "FailedToLoadAvailableLocalesConfiguration",
    "7": "ParameterParseFailure",
    "8": "ParameterInvalidRange",
    "9": "BadRequest",
    "10": "AuthenticationInvalid",
    "11": "DataNotFound",
    "12": "InsufficientPrivileges",
    "13": "Duplicate",
    "14": "UnknownSqlResult",
    "15": "ValidationError",
    "16": "ValidationMissingFieldError",
    "17": "ValidationInvalidInputError",
    "18": "InvalidParameters",
    "19": "ParameterNotFound",
    "20": "UnhandledHttpException",
    "21": "NotFound",
    "22": "WebAuthModuleAsyncFailed",
    "23": "InvalidReturnValue",
    "24": "UserBanned",
    "25": "InvalidPostBody",
    "26": "MissingPostBody",
    "27": "ExternalServiceTimeout",
    "28": "ValidationLengthError",
    "29": "ValidationRangeError",
    "30": "JsonDeserializationError",
    "31": "ThrottleLimitExceeded",
    "32": "ValidationTagError",
    "33": "ValidationProfanityError",
    "34": "ValidationUrlFormatError",
    "35": "ThrottleLimitExceededMinutes",
    "36": "ThrottleLimitExceededMomentarily",
    "37": "ThrottleLimitExceededSeconds",
    "38": "ExternalServiceUnknown",
    "39": "ValidationWordLengthError",
    "40": "ValidationInvisibleUnicode",
    "41": "ValidationBadNames",
    "42": "ExternalServiceFailed",
    "43": "ServiceRetired",
    "44": "UnknownSqlException",
    "45": "UnsupportedLocale",
    "46": "InvalidPageNumber",
    "47": "MaximumPageSizeExceeded",
    "48": "ServiceUnsupported",
    "90": "UnableToUnPairMobileApp",
    "91": "UnableToPairMobileApp",
    "92": "CannotUseMobileAuthWithNonMobileProvider",
    "93": "MissingDeviceCookie",
    "94": "FacebookTokenExpired",
    "95": "AuthTicketRequired",
    "96": "CookieContextRequired",
    "97": "UnknownAuthenticationError",
    "98": "BungieNetAccountCreationRequired",
    "99": "WebAuthRequired",
    "100": "ContentUnknownSqlResult",
    "101": "ContentNeedUniquePath",
    "102": "ContentSqlException",
    "103": "ContentNotFound",
    "104": "ContentSuccessWithTagAddFail",
    "105": "ContentSearchMissingParameters",
    "106": "ContentInvalidId",
    "107": "ContentPhysicalFileDeletionError",
    "108": "ContentPhysicalFileCreationError",
    "109": "ContentPerforceSubmissionError",
    "110": "ContentPerforceInitializationError",
    "111": "ContentDeploymentPackageNotReadyError",
    "112": "ContentUploadFailed",
    "113": "ContentTooManyResults",
    "115": "ContentInvalidState",
    "116": "ContentNavigationParentNotFound",
    "117": "ContentNavigationParentUpdateError",
    "118": "DeploymentPackageNotEditable",
    "119": "ContentValidationError",
    "120": "ContentPropertiesValidationError",
    "121": "ContentTypeNotFound",
    "122": "DeploymentPackageNotFound",
    "123": "ContentSearchInvalidParameters",
    "124": "ContentItemPropertyAggregationError",
    "125": "DeploymentPackageFileNotFound",
    "126": "ContentPerforceFileHistoryNotFound",
    "127": "ContentAssetZipCreationFailure",
    "128": "ContentAssetZipCreationBusy",
    "129": "ContentProjectNotFound",
    "130": "ContentFolderNotFound",
    "131": "ContentPackagesInconsistent",
    "132": "ContentPackagesInvalidState",
    "133": "ContentPackagesInconsistentType",
    "134": "ContentCannotDeletePackage",
    "135": "ContentLockedForChanges",
    "136": "ContentFileUploadFailed",
    "137": "ContentNotReviewed",
    "138": "ContentPermissionDenied",
    "139": "ContentInvalidExternalUrl",
    "140": "ContentExternalFileCannotBeImportedLocally",
    "141": "ContentTagSaveFailure",
    "142": "ContentPerforceUnmatchedFileError",
    "143": "ContentPerforceChangelistResultNotFound",
    "144": "ContentPerforceChangelistFileItemsNotFound",
    "145": "ContentPerforceInvalidRevisionError",
    "146": "ContentUnloadedSaveResult",
    "147": "ContentPropertyInvalidNumber",
    "148": "ContentPropertyInvalidUrl",
    "149": "ContentPropertyInvalidDate",
    "150": "ContentPropertyInvalidSet",
    "151": "ContentPropertyCannotDeserialize",
    "152": "ContentRegexValidationFailOnProperty",
    "153": "ContentMaxLengthFailOnProperty",
    "154": "ContentPropertyUnexpectedDeserializationError",
    "155": "ContentPropertyRequired",
    "156": "ContentCannotCreateFile",
    "157": "ContentInvalidMigrationFile",
    "158": "ContentMigrationAlteringProcessedItem",
    "159": "ContentPropertyDefinitionNotFound",
    "160": "ContentReviewDataChanged",
    "161": "ContentRollbackRevisionNotInPackage",
    "162": "ContentItemNotBasedOnLatestRevision",
    "163": "ContentUnauthorized",
    "164": "ContentCannotCreateDeploymentPackage",
    "165": "ContentUserNotFound",
    "166": "ContentLocalePermissionDenied",
    "167": "ContentInvalidLinkToInternalEnvironment",
    "168": "ContentInvalidBlacklistedContent",
    "200": "UserNonUniqueName",
    "201": "UserManualLinkingStepRequired",
    "202": "UserCreateUnknownSqlResult",
    "203": "UserCreateUnknownSqlException",
    "204": "UserMalformedMembershipId",
    "205": "UserCannotFindRequestedUser",
    "206": "UserCannotLoadAccountCredentialLinkInfo",
    "207": "UserInvalidMobileAppType",
    "208": "UserMissingMobilePairingInfo",
    "209": "UserCannotGenerateMobileKeyWhileUsingMobileCredential",
    "210": "UserGenerateMobileKeyExistingSlotCollision",
    "211": "UserDisplayNameMissingOrInvalid",
    "212": "UserCannotLoadAccountProfileData",
    "213": "UserCannotSaveUserProfileData",
    "214": "UserEmailMissingOrInvalid",
    "215": "UserTermsOfUseRequired",
    "216": "UserCannotCreateNewAccountWhileLoggedIn",
    "217": "UserCannotResolveCentralAccount",
    "218": "UserInvalidAvatar",
    "219": "UserMissingCreatedUserResult",
    "220": "UserCannotChangeUniqueNameYet",
    "221": "UserCannotChangeDisplayNameYet",
    "222": "UserCannotChangeEmail",
    "223": "UserUniqueNameMustStartWithLetter",
    "224": "UserNoLinkedAccountsSupportFriendListings",
    "225": "UserAcknowledgmentTableFull",
    "300": "MessagingUnknownError",
    "301": "MessagingSelfError",
    "302": "MessagingSendThrottle",
    "303": "MessagingNoBody",
    "304": "MessagingTooManyUsers",
    "305": "MessagingCanNotLeaveConversation",
    "306": "MessagingUnableToSend",
    "307": "MessagingDeletedUserForbidden",
    "308": "MessagingCannotDeleteExternalConversation",
    "309": "MessagingGroupChatDisabled",
    "310": "MessagingMustIncludeSelfInPrivateMessage",
    "400": "AddSurveyAnswersUnknownSqlException",
    "500": "ForumBodyCannotBeEmpty",
    "501": "ForumSubjectCannotBeEmptyOnTopicPost",
    "502": "ForumCannotLocateParentPost",
    "503": "ForumThreadLockedForReplies",
    "504": "ForumUnknownSqlResultDuringCreatePost",
    "505": "ForumUnknownTagCreationError",
    "506": "ForumUnknownSqlResultDuringTagItem",
    "507": "ForumUnknownExceptionCreatePost",
    "508": "ForumQuestionMustBeTopicPost",
    "509": "ForumExceptionDuringTagSearch",
    "510": "ForumExceptionDuringTopicRetrieval",
    "511": "ForumAliasedTagError",
    "512": "ForumCannotLocateThread",
    "513": "ForumUnknownExceptionEditPost",
    "514": "ForumCannotLocatePost",
    "515": "ForumUnknownExceptionGetOrCreateTags",
    "516": "ForumEditPermissionDenied",
    "517": "ForumUnknownSqlResultDuringTagIdRetrieval",
    "518": "ForumCannotGetRating",
    "519": "ForumUnknownExceptionGetRating",
    "520": "ForumRatingsAccessError",
    "521": "ForumRelatedPostAccessError",
    "522": "ForumLatestReplyAccessError",
    "523": "ForumUserStatusAccessError",
    "524": "ForumAuthorAccessError",
    "525": "ForumGroupAccessError",
    "526": "ForumUrlExpectedButMissing",
    "527": "ForumRepliesCannotBeEmpty",
    "528": "ForumRepliesCannotBeInDifferentGroups",
    "529": "ForumSubTopicCannotBeCreatedAtThisThreadLevel",
    "530": "ForumCannotCreateContentTopic",
    "531": "ForumTopicDoesNotExist",
    "532": "ForumContentCommentsNotAllowed",
    "533": "ForumUnknownSqlResultDuringEditPost",
    "534": "ForumUnknownSqlResultDuringGetPost",
    "535": "ForumPostValidationBadUrl",
    "536": "ForumBodyTooLong",
    "537": "ForumSubjectTooLong",
    "538": "ForumAnnouncementNotAllowed",
    "539": "ForumCannotShareOwnPost",
    "540": "ForumEditNoOp",
    "541": "ForumUnknownDatabaseErrorDuringGetPost",
    "542": "ForumExceeedMaximumRowLimit",
    "543": "ForumCannotSharePrivatePost",
    "544": "ForumCannotCrossPostBetweenGroups",
    "555": "ForumIncompatibleCategories",
    "556": "ForumCannotUseTheseCategoriesOnNonTopicPost",
    "557": "ForumCanOnlyDeleteTopics",
    "558": "ForumDeleteSqlException",
    "559": "ForumDeleteSqlUnknownResult",
    "560": "ForumTooManyTags",
    "561": "ForumCanOnlyRateTopics",
    "562": "ForumBannedPostsCannotBeEdited",
    "563": "ForumThreadRootIsBanned",
    "564": "ForumCannotUseOfficialTagCategoryAsTag",
    "565": "ForumAnswerCannotBeMadeOnCreatePost",
    "566": "ForumAnswerCannotBeMadeOnEditPost",
    "567": "ForumAnswerPostIdIsNotADirectReplyOfQuestion",
    "568": "ForumAnswerTopicIdIsNotAQuestion",
    "569": "ForumUnknownExceptionDuringMarkAnswer",
    "570": "ForumUnknownSqlResultDuringMarkAnswer",
    "571": "ForumCannotRateYourOwnPosts",
    "572": "ForumPollsMustBeTheFirstPostInTopic",
    "573": "ForumInvalidPollInput",
    "574": "ForumGroupAdminEditNonMember",
    "575": "ForumCannotEditModeratorEditedPost",
    "576": "ForumRequiresDestinyMembership",
    "577": "ForumUnexpectedError",
    "601": "GroupMembershipApplicationAlreadyResolved",
    "602": "GroupMembershipAlreadyApplied",
    "603": "GroupMembershipInsufficientPrivileges",
    "604": "GroupIdNotReturnedFromCreation",
    "605": "GroupSearchInvalidParameters",
    "606": "GroupMembershipPendingApplicationNotFound",
    "607": "GroupInvalidId",
    "608": "GroupInvalidMembershipId",
    "609": "GroupInvalidMembershipType",
    "610": "GroupMissingTags",
    "611": "GroupMembershipNotFound",
    "612": "GroupInvalidRating",
    "613": "GroupUserFollowingAccessError",
    "614": "GroupUserMembershipAccessError",
    "615": "GroupCreatorAccessError",
    "616": "GroupAdminAccessError",
    "617": "GroupPrivatePostNotViewable",
    "618": "GroupMembershipNotLoggedIn",
    "619": "GroupNotDeleted",
    "620": "GroupUnknownErrorUndeletingGroup",
    "621": "GroupDeleted",
    "622": "GroupNotFound",
    "623": "GroupMemberBanned",
    "624": "GroupMembershipClosed",
    "625": "GroupPrivatePostOverrideError",
    "626": "GroupNameTaken",
    "627": "GroupDeletionGracePeriodExpired",
    "628": "GroupCannotCheckBanStatus",
    "629": "GroupMaximumMembershipCountReached",
    "630": "NoDestinyAccountForClanPlatform",
    "631": "AlreadyRequestingMembershipForClanPlatform",
    "632": "AlreadyClanMemberOnPlatform",
    "633": "GroupJoinedCannotSetClanName",
    "634": "GroupLeftCannotClearClanName",
    "635": "GroupRelationshipRequestPending",
    "636": "GroupRelationshipRequestBlocked",
    "637": "GroupRelationshipRequestNotFound",
    "638": "GroupRelationshipBlockNotFound",
    "639": "GroupRelationshipNotFound",
    "641": "GroupAlreadyAllied",
    "642": "GroupAlreadyMember",
    "643": "GroupRelationshipAlreadyExists",
    "644": "InvalidGroupTypesForRelationshipRequest",
    "646": "GroupAtMaximumAlliances",
    "647": "GroupCannotSetClanOnlySettings",
    "648": "ClanCannotSetTwoDefaultPostTypes",
    "649": "GroupMemberInvalidMemberType",
    "650": "GroupInvalidPlatformType",
    "651": "GroupMemberInvalidSort",
    "652": "GroupInvalidResolveState",
    "653": "ClanAlreadyEnabledForPlatform",
    "654": "ClanNotEnabledForPlatform",
    "655": "ClanEnabledButCouldNotJoinNoAccount",
    "656": "ClanEnabledButCouldNotJoinAlreadyMember",
    "657": "ClanCannotJoinNoCredential",
    "658": "NoClanMembershipForPlatform",
    "659": "GroupToGroupFollowLimitReached",
    "660": "ChildGroupAlreadyInAlliance",
    "661": "OwnerGroupAlreadyInAlliance",
    "662": "AllianceOwnerCannotJoinAlliance",
    "663": "GroupNotInAlliance",
    "664": "ChildGroupCannotInviteToAlliance",
    "665": "GroupToGroupAlreadyFollowed",
    "666": "GroupToGroupNotFollowing",
    "667": "ClanMaximumMembershipReached",
    "668": "ClanNameNotValid",
    "669": "ClanNameNotValidError",
    "670": "AllianceOwnerNotDefined",
    "671": "AllianceChildNotDefined",
    "701": "ActivitiesUnknownException",
    "702": "ActivitiesParameterNull",
    "703": "ActivityCountsDiabled",
    "704": "ActivitySearchInvalidParameters",
    "705": "ActivityPermissionDenied",
    "706": "ShareAlreadyShared",
    "707": "ActivityLoggingDisabled",
    "801": "ItemAlreadyFollowed",
    "802": "ItemNotFollowed",
    "803": "CannotFollowSelf",
    "804": "GroupFollowLimitExceeded",
    "805": "TagFollowLimitExceeded",
    "806": "UserFollowLimitExceeded",
    "900": "NoValidTagsInList",
    "901": "BelowMinimumSuggestionLength",
    "902": "CannotGetSuggestionsOnMultipleTagsSimultaneously",
    "903": "NotAValidPartialTag",
    "904": "TagSuggestionsUnknownSqlResult",
    "905": "TagsUnableToLoadPopularTagsFromDatabase",
    "906": "TagInvalid",
    "907": "TagNotFound",
    "908": "SingleTagExpected",
    "1000": "IgnoreInvalidParameters",
    "1001": "IgnoreSqlException",
    "1002": "IgnoreErrorRetrievingGroupPermissions",
    "1003": "IgnoreErrorInsufficientPermission",
    "1004": "IgnoreErrorRetrievingItem",
    "1005": "IgnoreCannotIgnoreSelf",
    "1006": "IgnoreIllegalType",
    "1007": "IgnoreNotFound",
    "1008": "IgnoreUserGloballyIgnored",
    "1009": "IgnoreUserIgnored",
    "1100": "NotificationSettingInvalid",
    "1204": "PSNExExpiredTicket",
    "1205": "PSNExForbidden",
    "1218": "PSNExSystemDisabled",
    "1219": "PSNFriendsMissingTicket",
    "1223": "PsnApiErrorCodeUnknown",
    "1224": "PsnApiErrorWebException",
    "1225": "PsnApiBadRequest",
    "1226": "PsnApiAccessTokenRequired",
    "1227": "PsnApiInvalidAccessToken",
    "1228": "PsnApiExpiredAccessToken",
    "1229": "PsnApiBannedUser",
    "1230": "PsnApiAccountUpgradeRequired",
    "1231": "PsnApiServiceTemporarilyUnavailable",
    "1232": "PsnApiServerBusy",
    "1233": "PsnApiUnderMaintenance",
    "1234": "PsnApiProfileUserNotFound",
    "1235": "PsnApiProfilePrivacyRestriction",
    "1236": "PsnApiProfileUnderMaintenance",
    "1237": "PsnApiAccountAttributeMissing",
    "1300": "XblExSystemDisabled",
    "1301": "XblExUnknownError",
    "1400": "ReportNotYetResolved",
    "1401": "ReportOverturnDoesNotChangeDecision",
    "1402": "ReportNotFound",
    "1403": "ReportAlreadyReported",
    "1404": "ReportInvalidResolution",
    "1500": "LegacyGameStatsSystemDisabled",
    "1501": "LegacyGameStatsUnknownError",
    "1502": "LegacyGameStatsMalformedSneakerNetCode",
    "1600": "DestinyAccountAcquisitionFailure",
    "1601": "DestinyAccountNotFound",
    "1602": "DestinyBuildStatsDatabaseError",
    "1603": "DestinyCharacterStatsDatabaseError",
    "1604": "DestinyPvPStatsDatabaseError",
    "1605": "DestinyPvEStatsDatabaseError",
    "1606": "DestinyGrimoireStatsDatabaseError",
    "1607": "DestinyStatsParameterMembershipTypeParseError",
    "1608": "DestinyStatsParameterMembershipIdParseError",
    "1609": "DestinyStatsParameterRangeParseError",
    "1610": "DestinyStringItemHashNotFound",
    "1611": "DestinyStringSetNotFound",
    "1612": "DestinyContentLookupNotFoundForKey",
    "1613": "DestinyContentItemNotFound",
    "1614": "DestinyContentSectionNotFound",
    "1615": "DestinyContentPropertyNotFound",
    "1616": "DestinyContentConfigNotFound",
    "1617": "DestinyContentPropertyBucketValueNotFound",
    "1618": "DestinyUnexpectedError",
    "1619": "DestinyInvalidAction",
    "1620": "DestinyCharacterNotFound",
    "1621": "DestinyInvalidFlag",
    "1622": "DestinyInvalidRequest",
    "1623": "DestinyItemNotFound",
    "1624": "DestinyInvalidCustomizationChoices",
    "1625": "DestinyVendorItemNotFound",
    "1626": "DestinyInternalError",
    "1627": "DestinyVendorNotFound",
    "1628": "DestinyRecentActivitiesDatabaseError",
    "1629": "DestinyItemBucketNotFound",
    "1630": "DestinyInvalidMembershipType",
    "1631": "DestinyVersionIncompatibility",
    "1632": "DestinyItemAlreadyInInventory",
    "1633": "DestinyBucketNotFound",
    "1634": "DestinyCharacterNotInTower",
    "1635": "DestinyCharacterNotLoggedIn",
    "1636": "DestinyDefinitionsNotLoaded",
    "1637": "DestinyInventoryFull",
    "1638": "DestinyItemFailedLevelCheck",
    "1639": "DestinyItemFailedUnlockCheck",
    "1640": "DestinyItemUnequippable",
    "1641": "DestinyItemUniqueEquipRestricted",
    "1642": "DestinyNoRoomInDestination",
    "1643": "DestinyServiceFailure",
    "1644": "DestinyServiceRetired",
    "1645": "DestinyTransferFailed",
    "1646": "DestinyTransferNotFoundForSourceBucket",
    "1647": "DestinyUnexpectedResultInVendorTransferCheck",
    "1648": "DestinyUniquenessViolation",
    "1649": "DestinyErrorDeserializationFailure",
    "1650": "DestinyValidAccountTicketRequired",
    "1651": "DestinyShardRelayClientTimeout",
    "1652": "DestinyShardRelayProxyTimeout",
    "1800": "FbInvalidRequest",
    "1801": "FbRedirectMismatch",
    "1802": "FbAccessDenied",
    "1803": "FbUnsupportedResponseType",
    "1804": "FbInvalidScope",
    "1805": "FbUnsupportedGrantType",
    "1806": "FbInvalidGrant",
    "1900": "InvitationExpired",
    "1901": "InvitationUnknownType",
    "1902": "InvitationInvalidResponseStatus",
    "1903": "InvitationInvalidType",
    "1904": "InvitationAlreadyPending",
    "1905": "InvitationInsufficientPermission",
    "1906": "InvitationInvalidCode",
    "1907": "InvitationInvalidTargetState",
    "1908": "InvitationCannotBeReactivated",
    "1909": "InvitationAutoApproved",
    "1910": "InvitationNoRecipients",
    "1911": "InvitationGroupCannotSendToSelf",
    "1912": "InvitationTooManyRecipients",
    "1913": "InvitationInvalid",
    "1914": "InvitationNotFound",
    "2000": "TokenInvalid",
    "2001": "TokenBadFormat",
    "2002": "TokenAlreadyClaimed",
    "2003": "TokenAlreadyClaimedSelf",
    "2004": "TokenThrottling",
    "2005": "TokenUnknownRedemptionFailure",
    "2006": "TokenPurchaseClaimFailedAfterTokenClaimed",
    "2007": "TokenUserAlreadyOwnsOffer",
    "2008": "TokenInvalidOfferKey",
    "2009": "TokenEmailNotValidated",
    "2010": "TokenProvisioningBadVendorOrOffer",
    "2011": "TokenPurchaseHistoryUnknownError",
    "2012": "TokenThrottleStateUnknownError",
    "2013": "TokenUserAgeNotVerified",
    "2014": "TokenExceededOfferMaximum",
    "2015": "TokenNoAvailableUnlocks",
    "2016": "TokenMarketplaceInvalidPlatform",
    "2017": "TokenNoMarketplaceCodesFound",
    "2018": "TokenOfferNotAvailableForRedemption",
    "2019": "TokenUnlockPartialFailure",
    "2020": "TokenMarketplaceInvalidRegion"
  };
  ReverseGlobals.BucketCategory = {
    "0": "Invisible",
    "1": "Item",
    "2": "Currency",
    "3": "Equippable",
    "4": "Ignored"
  };
  ReverseGlobals.BungieMembershipType = {
    "0": "None",
    "1": "TigerXbox",
    "2": "TigerPsn",
    "10": "TigerDemon",
    "254": "BungieNext",
    "-1": "All"
  };
  ReverseGlobals.ReportResolutionStatus = {
    "0": "Unresolved",
    "1": "Innocent",
    "2": "GuiltyBan",
    "3": "GuiltyBlastBan",
    "4": "GuiltyWarn",
    "5": "GuiltyAlias"
  };
  ReverseGlobals.ForumTypeEnum = {
    "0": "Public",
    "1": "News",
    "2": "Group",
    "3": "Alliance"
  };
  ReverseGlobals.DamageType = {
    "0": "None",
    "1": "Kinetic",
    "2": "Arc",
    "3": "Thermal",
    "4": "Void",
    "5": "Raid"
  };
  ReverseGlobals.DestinyTalentNodeState = {
    "0": "Invalid",
    "1": "CanUpgrade",
    "2": "NoPoints",
    "3": "NoPrerequisites",
    "4": "NoSteps",
    "5": "NoUnlock",
    "6": "NoMaterial",
    "7": "NoGridLevel",
    "8": "SwappingLocked",
    "9": "MustSwap",
    "10": "Complete",
    "11": "Unknown"
  };
  ReverseGlobals.OfferRedeemMode = {
    "0": "Off",
    "1": "Unlock",
    "2": "Platform"
  };
  ReverseGlobals.ClientDeviceType = {
    "0": "Unknown",
    "1": "Xbox360",
    "2": "Playstation3",
    "3": "AndroidPhone",
    "4": "AndroidTablet",
    "5": "ApplePhone",
    "6": "AppleTablet",
    "7": "WebBrowser",
    "8": "NativeWindows",
    "9": "NativeMac",
    "10": "WindowsPhone",
    "11": "WindowsTablet",
    "12": "XboxOne",
    "13": "Playstation4",
    "255": "Fake"
  };
  ReverseGlobals.OptInFlags = {
    "1": "Newsletter",
    "2": "System",
    "4": "Marketing",
    "8": "UserResearch",
    "16": "CustomerService"
  };
  ReverseGlobals.EquipFailureReason = {
    "0": "None",
    "1": "ItemUnequippable",
    "2": "ItemUniqueEquipRestricted",
    "4": "ItemFailedUnlockCheck",
    "8": "ItemFailedLevelCheck",
    "16": "ItemNotOnCharacter"
  };
  ReverseGlobals.UnitType = {
    "0": "None",
    "1": "Count",
    "2": "PerGame",
    "3": "Seconds",
    "4": "Points",
    "5": "Team",
    "6": "Distance",
    "7": "Percent",
    "8": "Ratio",
    "9": "Boolean",
    "10": "WeaponType"
  };
  ReverseGlobals.EntityType = {
    "0": "None",
    "1": "User",
    "2": "Group",
    "3": "Post",
    "4": "Invitation",
    "5": "Report",
    "6": "Activity",
    "7": "Conversation"
  };
  ReverseGlobals.InvitationResponseState = {
    "0": "Unreviewed",
    "1": "Approved",
    "2": "Rejected"
  };

  /** @namespace **/
  var bungieNetPlatform = {},
      currentRequests = [];

  (function(a) {
    /** @namespace **/
    bungieNetPlatform.platformSettings = {
      initialize: function(b) {
        bungieNetPlatform.platformSettings = a.extend(bungieNetPlatform.platformSettings, a.extend({
          platformUrl: "/Platform",
          renderContentEditLinks: false
        }, b))
      }
    }
  })(jQuery);

  (function(a) {
    /**
     * Method to check for internal errors.
     */
    function c(b, f, e, d, g) {
      if (b.ErrorCode == 1) {
        f(b.Response);
        d.resolve(b.Response)
      } else {
        var c = {
          errorCode: b.ErrorCode,
          errorStatus: b.ErrorStatus,
          errorMessage: b.Message,
          messageData: b.MessageData,
          debug: b.Debug
        };
        e(c, b.Response);
        d.reject(c)
      }
      currentRequest = currentRequests.splice(a.inArray(g, currentRequests), 1)
    }
    function b(e, f, g, c, d) {
      var b = {
        errorCode: 2,
        errorStatus: "TransportException",
        errorMessage: Localizer.Messages.TransportException,
        messageData: []
      };
      c(b, null);
      d.reject(b);
      currentRequest = currentRequests.splice(a.inArray(e, currentRequests), 1)
    }

    /**
     * Returns a CSRF header for POST requests
     *
     * @return {{x-csrf: *}}
     */
    bungieNetPlatform.getCSRFHeader = function() {
      var a = Cookies.GetMulti(ServerVars.WebAuthCookieName, "tk");
      return a ? {
        "x-csrf": a
      } : {}
    };

    /**
     * Returns all headers needed for a request (X-API-Key, x-csrf)
     *
     * @return {object}
     */
    bungieNetPlatform.getHeaders = function() {
      var a = bungieNetPlatform.getCSRFHeader();
      a["X-API-Key"] = "10E792629C2A47E19356B8A79EEFA640";
      return a
    };

    /** @namespace **/
    bungieNetPlatform.serviceLibrary = {
      /**
       * Sends a POST request to given URL
       *
       * @param {string} url - URL the request is sent to
       * @param {object} postData - accompanying post data
       * @param {successCallback} successCallback
       * @param {errorCallback} errorCallback
       * @return {jQuery.Deferred}
       */
      post: function(url, postData, successCallback, errorCallback) {
        var d = a.Deferred(),
            h = a.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(postData),
            dataType: "json",
            contentType: "application/json; charset=utf-8;",
            processData: false,
            headers: bungieNetPlatform.getHeaders(),
            success: function(b, g, a) {
              c(b, successCallback, errorCallback, d, a)
            },
            error: function(f, a, c) {
              b(successCallback, a, c, errorCallback, d)
            }
          });
        currentRequests.push(h);
        return d.promise()
      },

      /**
       * Sends a GET request to given URL
       *
       * @param {string} url - URL the request is sent to
       * @param {successCallback} successCallback
       * @param {errorCallback} errorCallback
       * @return {jQuery.Deferred}
       */
      "get": function(url, successCallback, errorCallback) {
        var d = a.Deferred(),
            g = a.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            headers: bungieNetPlatform.getHeaders(),
            success: function(b, g, a) {
              c(b, successCallback, errorCallback, d, a)
            },
            error: function(f, a, c) {
              b(successCallback, a, c, errorCallback, d)
            }
          });
        currentRequests.push(g);
        return d.promise()
      },

      postForm: function(url, data, e, g, f) {
        var d = a.Deferred(),
            i = a.ajax({
            type: "POST",
            url: url,
            data: data,
            headers: bungieNetPlatform.getHeaders(),
            cache: false,
            dataType: e ? "json" : null,
            contentType: false,
            processData: false,
            success: function(b, i, h) {
              if (e) c(b, g, f, d, h);
              else {
                var a = JSON.parse(b);
                g(a);
                d.resolve(a)
              }
            },
            error: function(e, a, c) {
              b(e, a, c, f, d)
            }
          });
        currentRequests.push(i);
        return d.promise()
      }
    }
  })(jQuery);

  (function() {
    bungieNetPlatform.jsonpService = {
      dataStore: [],
      jsonpData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.jsonpService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.jsonpService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.jsonpService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.jsonpService.dataStore["Set_" + a.id] = a
        }
      },
      /**
       * Gets the current user with a JSONP callback
       * @param {string} jsonpCallback - Name of the JSONP Callback
       * @param {successCallback} successCallback
       * @param {errorCallback} errorCallback
       * @param c
       * @return {jQuery.Deferred}
       */
       GetCurrentUser: function(jsonpCallback, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/JSONP/GetBungieNetUser/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&callback=" + encodeURIComponent(jsonpCallback);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      }
    }
  })(jQuery);

  (function(a) {
    /**
     * @namespace
     */
    bungieNetPlatform.userService = {
      dataStore: [],
      userData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.userService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.userService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.userService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.userService.dataStore["Set_" + a.id] = a
        }
      },
      CreateUser: function(userData, successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/CreateUser/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, userData, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      UpdateUser: function(userData, successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/UpdateUser/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, userData, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      UpdateUserAdmin: function(g, d, successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/UpdateUserAdmin/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      UpdateNotificationSetting: function(notificationSettings, successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/Notification/Update/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, notificationSettings, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      EditSuccessMessageFlags: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/MessageFlags/Success/Update/" + encodeURIComponent(f) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },

      /**
       * Returns the current user as a result.
       *
       * @param {successCallback} successCallback
       * @param {errorCallback} errorCallback
       * @param b
       * @return {Deferred}
       */
      GetCurrentUser: function(successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetBungieNetUser/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },

      /**
       * Returns the counts for the current user.
       *
       * @param {successCallback} successCallback
       * @param {errorCallback} errorCallback
       * @param b
       * @return {Deferred}
       */
      GetCountsForCurrentUser: function(successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetCounts/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },

      /**
       * Returns a user specified by a userId.
       *
       * @param {number} userId - Id of the user
       * @param successCallback
       * @param errorCallback
       * @param b
       * @return {Deferred}
       */
      GetBungieNetUserById: function(userId, successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetBungieNetUserById/" + encodeURIComponent(userId) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },

      /**
       * Returns a users aliases specified by a userId.
       *
       * @param {number} userId - Id of the user
       * @param successCallback
       * @param errorCallback
       * @param b
       * @return {Deferred}
       */
      GetUserAliases: function(userId, successCallback, errorCallback, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetUserAliases/" + encodeURIComponent(userId) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          successCallback(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          successCallback(a)
        }, errorCallback)
      },
      SearchUsers: function(username, successCallback, errorCallback, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/SearchUsers/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&q=" + encodeURIComponent(username);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          successCallback(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          successCallback(a)
        }, errorCallback)
      },
      GetBungieAccount: function(h, g, successCallback, errorCallback, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetBungieAccount/" + encodeURIComponent(h) + "/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          successCallback(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          successCallback(a)
        }, errorCallback)
      },
      SearchUsersPaged: function(searchTerm, page, successCallback, errorCallback, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/SearchUsersPaged/" + encodeURIComponent(searchTerm) + "/" + encodeURIComponent(page) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          successCallback(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          successCallback(a)
        }, errorCallback)
      },
      SearchUsersPagedV2: function(h, i, g, successCallback, errorCallback, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/SearchUsersPaged/" + encodeURIComponent(h) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          successCallback(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          successCallback(a)
        }, errorCallback)
      },
      GetNotificationSettings: function(successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetNotificationSettings/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetCredentialTypesForAccount: function(successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetCredentialTypesForAccount/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetAvailableAvatars: function(successCallback, errorCallback, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetAvailableAvatars/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          successCallback(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          successCallback(a)
        }, errorCallback)
      },
      GetAvailableAvatarsAdmin: function(g, successCallback, errorCallback, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetAvailableAvatarsAdmin/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          successCallback(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          successCallback(a)
        }, errorCallback)
      },
      GetAvailableThemes: function(successCallback, errorCallback, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetAvailableThemes/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          successCallback(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          successCallback(a)
        }, errorCallback)
      },
      RegisterMobileAppPair: function(successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/RegisterMobileAppPair/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      UnregisterMobileAppPair: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/UnregisterMobileAppPair/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      UpdateStateInfoForMobileAppPair: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/UpdateStateInfoForMobileAppPair/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      GetMobileAppPairings: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetMobileAppPairings/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.userService.userData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.userService.userData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetMobileAppPairingsUncached: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetMobileAppPairingsUncached/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetSignOutUrl: function(successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetSignOutUrl/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      DemonwareLinkOverride: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/DemonwareLinkOverride/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      GetUserMembershipIds: function(d, e, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetMembershipIds/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&excludebungienet=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      SetAcknowledged: function(e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/User/Acknowledged/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, f)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.messageService = {
      dataStore: [],
      messageData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.messageService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.messageService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.messageService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.messageService.dataStore["Set_" + a.id] = a
        }
      },
      GetConversationByIdV2: function(conversationId, format, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationByIdV2/" + encodeURIComponent(conversationId) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&format=" + encodeURIComponent(format);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetConversationWithMemberIdV2: function(memberId, format, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationWithMemberV2/" + encodeURIComponent(memberId) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&format=" + encodeURIComponent(format);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetConversationThreadV3: function(d, h, e, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationThreadV3/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&format=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },

      /**
       * @param messageData {Object}  Contains body and conversationId
       * @param successCallback {Function} Called on Success
       * @param errorCallback {Function} Called on error
       * @param b {Undefined}
       */
      SaveMessageV3: function(messageData, successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/SaveMessageV3/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      CreateConversation: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/CreateConversation/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      GetConversationsV4: function(g, d, e, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationsV4/" + encodeURIComponent(g) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&format=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetUnreadConversationCountV3: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetUnreadConversationCountV3/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      LeaveConversation: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/LeaveConversation/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      ReviewInvitations: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/ReviewListDirect/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      ReviewAllInvitations: function(d, e, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/ReviewAllDirect/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      ReviewInvitationDirect: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/ReviewDirect/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      ReviewInvitation: function(e, f, d, g, h, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          g(a)
        }, h)
      },
      GetAllianceJoinInvitations: function(d, g, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/AllianceInvitations/RequestsToJoinYourGroup/" + encodeURIComponent(d) + "/" + encodeURIComponent(g) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetAllianceInvitedToJoinInvitations: function(d, g, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/AllianceInvitations/InvitationsToJoinAnotherGroup/" + encodeURIComponent(d) + "/" + encodeURIComponent(g) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetInvitationDetails: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/" + encodeURIComponent(d) + "/Details/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetUnreadConversationCountV2: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetUnreadPrivateConversationCount/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetConversationById: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationById/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetConversationWithMemberId: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationWithMember/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      SaveMessageV2: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/SaveMessageV2/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      GetConversationsV2: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationsV2/" + encodeURIComponent(g) + "/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetConversationsV3: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationsV3/" + encodeURIComponent(g) + "/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetConversationThreadV2: function(d, h, e, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationThreadV2/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.notificationService = {
      dataStore: [],
      notificationData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.notificationService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.notificationService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.notificationService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.notificationService.dataStore["Set_" + a.id] = a
        }
      },
      GetRecentNotifications: function(d, e, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Notification/GetRecent/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&format=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetRecentNotificationCount: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Notification/GetCount/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      ResetNotification: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Notification/Reset/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.contentService = {
      dataStore: [],
      contentData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.contentService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.contentService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.contentService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.contentService.dataStore["Set_" + a.id] = a
        }
      },
      GetContentType: function(h, f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/GetContentType/" + encodeURIComponent(h) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetContentById: function(j, g, i, f, h, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/GetContentById/" + encodeURIComponent(j) + "/" + encodeURIComponent(g) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&head=" + encodeURIComponent(i);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, h)
      },
      GetContentByTagAndType: function(k, j, g, i, f, h, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/GetContentByTagAndType/" + encodeURIComponent(k) + "/" + encodeURIComponent(j) + "/" + encodeURIComponent(g) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&head=" + encodeURIComponent(i);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, h)
      },
      SearchContentEx: function(g, e, h, d, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Content/SearchEx/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&head=" + encodeURIComponent(h);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          d(a)
        }, f)
      },
      SearchContentWithText: function(i, l, j, m, g, h, f, k, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Search/" + encodeURIComponent(i) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&head=" + encodeURIComponent(l) + "&ctype=" + encodeURIComponent(j) + "&tag=" + encodeURIComponent(m) + "&currentpage=" + encodeURIComponent(g) + "&searchtext=" + encodeURIComponent(h);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, k)
      },
      SearchContentByTagAndType: function(m, l, i, k, h, g, f, j, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/SearchContentByTagAndType/" + encodeURIComponent(m) + "/" + encodeURIComponent(l) + "/" + encodeURIComponent(i) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&head=" + encodeURIComponent(k) + "&currentpage=" + encodeURIComponent(h) + "&itemsperpage=" + encodeURIComponent(g);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, j)
      },
      GetHomepageContent: function(g, f, h, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/Homepage/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, h)
      },
      GetJobs: function(g, f, h, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/Jobs/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, h)
      },
      GetNews: function(i, j, g, h, f, k, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/News/" + encodeURIComponent(i) + "/" + encodeURIComponent(j) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&itemsperpage=" + encodeURIComponent(g) + "&currentpage=" + encodeURIComponent(h);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, k)
      },
      GetDestinyContent: function(g, f, h, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/Destiny/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, h)
      },
      GetDestinyContentV2: function(g, f, h, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/Destiny/V2/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.contentService.contentData.setCacheItem(a);
          f(a)
        }, h)
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.externalSocialService = {
      dataStore: [],
      externalSocialData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.externalSocialService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.externalSocialService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.externalSocialService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.externalSocialService.dataStore["Set_" + a.id] = a
        }
      },
      GetAggregatedSocialFeed: function(i, g, f, h, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/ExternalSocial/GetAggregatedSocialFeed/" + encodeURIComponent(i) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&types=" + encodeURIComponent(g);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.externalSocialService.externalSocialData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.externalSocialService.externalSocialData.setCacheItem(a);
          f(a)
        }, h)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.surveyService = {
      dataStore: [],
      surveyData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.surveyService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.surveyService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.surveyService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.surveyService.dataStore["Set_" + a.id] = a
        }
      },
      GetSurvey: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Survey/GetSurvey/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.forumService = {
      dataStore: [],
      forumData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.forumService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.forumService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.forumService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.forumService.dataStore["Set_" + a.id] = a
        }
      },
      CreatePost: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/CreatePost/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      CreateContentComment: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/CreateContentComment/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      EditPost: function(g, e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/EditPost/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          d(a)
        }, f)
      },
      DeletePost: function(e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/DeletePost/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, f)
      },
      RatePost: function(e, f, d, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/RatePost/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, g)
      },
      UndoRating: function(e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/UndoRating/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, f)
      },
      ModeratePost: function(g, e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Post/" + encodeURIComponent(e) + "/Moderate/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          d(a)
        }, f)
      },
      ModerateTag: function(g, e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Tags/" + encodeURIComponent(e) + "/Moderate/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          d(a)
        }, f)
      },
      ModerateGroupPost: function(g, e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Post/" + encodeURIComponent(e) + "/GroupModerate/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          d(a)
        }, f)
      },
      GetTopicsPagedForAlliance: function(k, g, j, l, f, d, e, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetTopicsPagedForAlliance/" + encodeURIComponent(k) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(j) + "/" + encodeURIComponent(l) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&tagstring=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetTopicsPaged: function(k, g, j, l, f, d, e, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetTopicsPaged/" + encodeURIComponent(k) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(j) + "/" + encodeURIComponent(l) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&tagstring=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetPopularTopicsAnonymously: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPopularTopicsAnonymously/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.forumService.forumData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.forumService.forumData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetPostsThreadedPaged: function(f, m, i, h, e, d, j, g, k, l, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPostsThreadedPaged/" + encodeURIComponent(f) + "/" + encodeURIComponent(m) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(h) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(j) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&showbanned=" + encodeURIComponent(g);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          k(a)
        }, l)
      },
      GetPostsThreadedPagedFromChild: function(e, k, g, f, d, h, i, j, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPostsThreadedPagedFromChild/" + encodeURIComponent(e) + "/" + encodeURIComponent(k) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          i(a)
        }, j)
      },
      GetPostAndParent: function(g, h, f, i, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPostAndParent/" + encodeURIComponent(g) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&showbanned=" + encodeURIComponent(h);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.forumService.forumData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.forumService.forumData.setCacheItem(a);
          f(a)
        }, i)
      },
      GetPopularTags: function(h, g, f, i, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPopularTags/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&quantity=" + encodeURIComponent(h) + "&tagsSinceDate=" + encodeURIComponent(g);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.forumService.forumData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.forumService.forumData.setCacheItem(a);
          f(a)
        }, i)
      },
      GetForumTagCountEstimate: function(g, f, h, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetForumTagCountEstimate/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.forumService.forumData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.forumService.forumData.setCacheItem(a);
          f(a)
        }, h)
      },
      GetTopicForContent: function(g, f, h, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetTopicForContent/" + encodeURIComponent(g) + "/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.forumService.forumData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.forumService.forumData.setCacheItem(a);
          f(a)
        }, h)
      },
      GetForumTagSuggestions: function(g, f, h, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetForumTagSuggestions/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&partialtag=" + encodeURIComponent(g);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.forumService.forumData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.forumService.forumData.setCacheItem(a);
          f(a)
        }, h)
      },
      MarkReplyAsAnswer: function(d, e, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/MarkReplyAsAnswer/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      PollVote: function(f, d, e, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Poll/Vote/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          e(a)
        }, g)
      },
      GetPoll: function(e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Poll/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, f)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.activityService = {
      dataStore: [],
      activityData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.activityService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.activityService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.activityService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.activityService.dataStore["Set_" + a.id] = a
        }
      },
      GetAggregatedActivitiesForCurrentUser: function(d, e, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Aggregation/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&typefilter=" + encodeURIComponent(d) + "&format=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetEntitiesFollowedByCurrentUser: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Following/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetGroupsFollowedByCurrentUser: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Following/Groups/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetGroupsFollowedByUser: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(f) + "/Following/Groups/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetGroupsFollowedPagedByUser: function(d, e, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(d) + "/Following/Groups/Paged/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetEntitiesFollowedByUser: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(f) + "/Following/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetFollowersOfUser: function(h, d, e, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(h) + "/Followers/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      FollowUser: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(f) + "/Follow/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },
      UnfollowUser: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(f) + "/Unfollow/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },
      GetLikeAndShareActivityForUser: function(i, d, e, f, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(i) + "/Activities/LikesAndShares/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e) + "&format=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetLikeAndShareActivityForUserV2: function(h, d, e, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(h) + "/Activities/LikesAndSharesV2/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&currentpage=" + encodeURIComponent(d) + "&format=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetForumActivityForUser: function(i, d, e, f, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(i) + "/Activities/Forums/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e) + "&format=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetForumActivityForUserV2: function(h, d, e, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(h) + "/Activities/ForumsV2/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&currentpage=" + encodeURIComponent(d) + "&format=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetFollowersOfGroup: function(h, d, e, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Group/" + encodeURIComponent(h) + "/Followers/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      FollowGroup: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Group/" + encodeURIComponent(f) + "/Follow/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },
      UnfollowGroup: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Group/" + encodeURIComponent(f) + "/Unfollow/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },
      GetGroupActivities: function(g, d, e, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Group/" + encodeURIComponent(g) + "/Activities/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&format=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetFollowersOfTag: function(h, d, e, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Tag/Followers/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&tag=" + encodeURIComponent(h) + "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      FollowTag: function(f, d, e, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Tag/Follow/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&tag=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },
      UnfollowTag: function(f, d, e, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Tag/Unfollow/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&tag=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },
      GetFriends: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Friends/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetFriendsAllNoPresence: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Friends/AllNoPresence/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetFriendsPaged: function(d, e, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Friends/Paged/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.groupService = {
      dataStore: [],
      groupData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.groupService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.groupService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.groupService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.groupService.dataStore["Set_" + a.id] = a
        }
      },
      GetAvailableAvatars: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Group/GetAvailableAvatars/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.groupService.groupData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.groupService.groupData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetAvailableThemes: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Group/GetAvailableThemes/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.groupService.groupData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.groupService.groupData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetGroupsFollowingGroup: function(d, f, e, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/FollowedBy/" + encodeURIComponent(f) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetGroupsFollowedByGroup: function(d, f, e, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Following/" + encodeURIComponent(f) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      FollowGroupWithGroup: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Follow/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      UnfollowGroupWithGroup: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Unfollow/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      FollowGroupsWithGroup: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/FollowList/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      UnfollowGroupsWithGroup: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/UnfollowList/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      UnfollowAllGroupsWithGroup: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/UnfollowAll/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          e(a)
        }, f)
      },
      InviteToJoinAlliance: function(h, d, e, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Allies/Invite/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
          f(a)
        }, g)
      },
      InviteManyToJoinAlliance: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Allies/InviteMany/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      RequestToJoinAlliance: function(h, e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Allies/RequestToJoin/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
          f(a)
        }, g)
      },
      BreakAlliance: function(d, e, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Relationship/" + encodeURIComponent(e) + "/BreakAlliance/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      BreakAlliances: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/BreakAlliances/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      DisbandAlliance: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/BreakAllAlliances/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          e(a)
        }, f)
      },
      SetGroupAsAlliance: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/SetAsAlliance/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          e(a)
        }, f)
      },
      GetAlliedGroups: function(f, e, d, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Allies/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&currentpage=" + encodeURIComponent(e) + "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetRecommendedGroups: function(f, e, d, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/Recommended/" + encodeURIComponent(f) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&membershiptype=" + encodeURIComponent(e) + "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GroupSearch: function(g, d, e, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/Search/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      GetJoinedGroupsForCurrentMember: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&clanonly=" + encodeURIComponent(e) + "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetJoinedGroupsForCurrentMemberV2: function(e, f, d, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/V2/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&clanonly=" + encodeURIComponent(f) + "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetPendingGroupsForCurrentMember: function(d, e, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyPendingGroups/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetPendingGroupsForCurrentMemberV2: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyPendingGroups/V2/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetAllGroupsForCurrentMember: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/All/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&clanonly=" + encodeURIComponent(e) + "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetDeletedGroupsForCurrentMember: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/Deleted/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetJoinedGroupsForMember: function(e, f, d, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&clanonly=" + encodeURIComponent(f) + "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetJoinedGroupsForMemberV2: function(e, f, g, d, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/Joined/" + encodeURIComponent(f) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&clanonly=" + encodeURIComponent(g) + "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetPendingGroupsForMember: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/Pending/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetPendingGroupsForMemberV2: function(e, f, d, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/PendingV2/" + encodeURIComponent(f) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetAllGroupsForMember: function(e, f, d, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/All/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&clanonly=" + encodeURIComponent(f) + "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetGroup: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetGroupByName: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/Name/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetGroupTagSuggestions: function(d, e, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/GetGroupTagSuggestions/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&partialtag=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      CreateGroup: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/Create/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      CreateMinimalGroup: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/Create/Minimal/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      EditGroup: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Edit/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      EditGroupV2: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/EditV2/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      SetPrivacy: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Privacy/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      UndeleteGroup: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Undelete/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          e(a)
        }, f)
      },
      InviteGroupMember: function(h, e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Invite/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
          f(a)
        }, g)
      },
      InviteClanMember: function(i, f, d, e, g, h, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/InviteToClan/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, i, function(a) {
          g(a)
        }, h)
      },
      GetPendingMemberships: function(f, d, e, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Members/Pending/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetPendingMembershipsV2: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/PendingV2/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&currentPage=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      RequestGroupMembership: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/Apply/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      RequestGroupMembershipV2: function(h, e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/ApplyV2/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
          f(a)
        }, g)
      },
      RescindGroupMembership: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/Rescind/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&populatefriends=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      ApproveGroupMembership: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Approve/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      ApproveGroupMembershipV2: function(h, e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/ApproveV2/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
          f(a)
        }, g)
      },
      DenyGroupMembership: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Deny/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      DenyGroupMembershipV2: function(h, e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/DenyV2/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
          f(a)
        }, g)
      },
      ApproveAllPending: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Members/ApproveAll/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      DenyAllPending: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Members/DenyAll/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      ApprovePendingForList: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Members/ApproveList/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      DenyPendingForList: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Members/DenyList/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      GetClanAttributeDefinitions: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Group/GetClanAttributeDefinitions/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.groupService.groupData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.groupService.groupData.setCacheItem(a);
          f(a)
        }, g)
      },
      EnableClanForGroup: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Clans/Enable/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      JoinClanForGroup: function(h, e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Clans/Join/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
          f(a)
        }, g)
      },
      LeaveClanForGroup: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Clans/Leave/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      DisableClanForGroup: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Clans/Disable/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      RefreshClanSettingsInDestiny: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyClans/Refresh/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          e(a)
        }, f)
      },
      GetMembersOfGroup: function(groupId, itemsPerPage, currentPage, memberType, platformType, sort, i, j, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(groupId) + "/Members/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsPerPage=" + encodeURIComponent(itemsPerPage) + "&currentPage=" + encodeURIComponent(currentPage) + "&memberType=" + encodeURIComponent(memberType) + "&platformType=" + encodeURIComponent(platformType) + "&sort=" + encodeURIComponent(sort);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          i(a)
        }, j)
      },
      GetMembersOfGroupV2: function(h, d, f, g, e, k, i, j, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(h) + "/MembersV2/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(f) + "&memberType=" + encodeURIComponent(g) + "&platformType=" + encodeURIComponent(e) + "&sort=" + encodeURIComponent(k);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          i(a)
        }, j)
      },
      GetMembersOfGroupV3: function(i, d, f, g, e, l, h, j, k, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(i) + "/MembersV3/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(f) + "&memberType=" + encodeURIComponent(g) + "&platformType=" + encodeURIComponent(e) + "&sort=" + encodeURIComponent(l) + "&nameSearch=" + encodeURIComponent(h);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          j(a)
        }, k)
      },
      GetAdminsOfGroup: function(f, d, e, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Admins/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetAdminsOfGroupV2: function(f, d, e, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/AdminsV2/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      EditGroupMembership: function(f, e, d, g, h, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/SetMembershipType/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          g(a)
        }, h)
      },
      KickMember: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Kick/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      BanMember: function(h, e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Ban/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
          f(a)
        }, g)
      },
      UnbanMember: function(e, d, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Unban/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      GetBannedMembersOfGroup: function(groupId, itemsPerPage, currentPage, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(groupId) + "/Banned/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsPerPage=" + encodeURIComponent(itemsPerPage) + "&currentPage=" + encodeURIComponent(currentPage);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetBannedMembersOfGroupV2: function(groupId, itemsPerPage, e, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(groupId) + "/BannedV2/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemsPerPage=" + encodeURIComponent(itemsPerPage) + "&currentPage=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      OverrideFounderAdmin: function(groupId, d, successCallback, errorCallback, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(groupId) + "/Admin/FounderOverride/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          successCallback(a)
        }, errorCallback)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.ignoreService = {
      dataStore: [],
      ignoreData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.ignoreService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.ignoreService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.ignoreService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.ignoreService.dataStore["Set_" + a.id] = a
        }
      },
      GetIgnoreStatusForPost: function(e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/MyIgnores/Posts/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, f)
      },
      GetIgnoreStatusForUser: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/MyIgnores/Users/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      GetIgnoresForUser: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/MyIgnores/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      IgnoreItem: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/Ignore/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      UnignoreItem: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/Unignore/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      MyLastReport: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/MyLastReport/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.gameService = {
      dataStore: [],
      gameData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.gameService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.gameService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.gameService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.gameService.dataStore["Set_" + a.id] = a
        }
      },
      GetPlayerGamesById: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Game/GetPlayerGamesById/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      },
      ReachModelSneakerNet: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Game/ReachModelSneakerNet/" + encodeURIComponent(f) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.adminService = {
      dataStore: [],
      adminData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.adminService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.adminService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.adminService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.adminService.dataStore["Set_" + a.id] = a
        }
      },
      GetAssignedReports: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Assigned/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },
      ResolveReport: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Assigned/Resolve/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      OverturnReport: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Reports/Overturn/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      GetDisciplinedReportsForMember: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Member/" + encodeURIComponent(d) + "/Reports/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      GetResolvedReports: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Reports/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      GloballyIgnoreItem: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Ignores/GloballyIgnore/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      OverrideBanOnUser: function(g, d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Member/" + encodeURIComponent(d) + "/SetBan/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          e(a)
        }, f)
      },
      OverrideGlobalIgnore: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Ignores/OverrideGlobalIgnore/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      AdminUserSearch: function(f, d, e, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Member/Search/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&q=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.bugsService = {
      dataStore: [],
      bugsData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.bugsService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.bugsService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.bugsService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.bugsService.dataStore["Set_" + a.id] = a
        }
      },
      GetUnreviewedBugs: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Unreviewed/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetBugById: function(e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Bug/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, f)
      },
      CreateBug: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Create/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      RejectBug: function(e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Bug/" + encodeURIComponent(e) + "/Reject/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, f)
      },
      ApproveBug: function(f, e, d, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Bug/" + encodeURIComponent(f) + "/Approve/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, g)
      },
      AddAttachment: function(g, e, d, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Bug/" + encodeURIComponent(e) + "/Attach/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
          d(a)
        }, f)
      },
      StatsFeedback: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Stats/Report/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      }
    }
  })(jQuery);
  (function() {
    bungieNetPlatform.tokensService = {
      dataStore: [],
      tokensData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.tokensService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.tokensService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.tokensService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.tokensService.dataStore["Set_" + a.id] = a
        }
      },
      ClaimToken: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/Claim/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      GetCurrentUserOfferHistory: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/OfferHistory/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetCurrentUserThrottleState: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/ThrottleState/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      VerifyAge: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/VerifyAge/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          d(a)
        }, e)
      },
      ConsumeMarketplacePlatformCodeOffer: function(e, d, f, g, h, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/ConsumeMarketplacePlatformCodeOffer/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(f) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          g(a)
        }, h)
      },
      MarketplacePlatformCodeOfferHistory: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/MarketplacePlatformCodeOfferHistory/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      ApplyOfferToCurrentDestinyMembership: function(d, e, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/ApplyOffersToCurrentDestinyMembership/" + encodeURIComponent(d) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&offers=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
          f(a)
        }, g)
      },
      DestinyUnlockHistory: function(d, e, f, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/DestinyUnlockHistory/" + encodeURIComponent(d) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          e(a)
        }, f)
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.destinyService = {
      dataStore: [],
      destinyData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.destinyService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.destinyService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.destinyService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.destinyService.dataStore["Set_" + a.id] = a
        }
      },
      GetDestinyManifest: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Manifest/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.destinyService.destinyData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.destinyService.destinyData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetDestinySingleDefinition: function(i, j, g, f, h, e) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Manifest/" + encodeURIComponent(i) + "/" + encodeURIComponent(j) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        c += "&definitions=" + encodeURIComponent(g);
        if (typeof e !== "undefined") c += e;
        b = b + c;
        var d = bungieNetPlatform.destinyService.destinyData.getCacheItem(b);
        if (d) return a.Deferred(function(a) {
          f(d);
          a.resolve(d)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.destinyService.destinyData.setCacheItem(a);
          f(a)
        }, h)
      },
      SearchDestinyPlayer: function(d, e, f, g, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/SearchDestinyPlayer/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetAccount: function(membershipType, accountId, definitions, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/Account/" + encodeURIComponent(accountId) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(definitions);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetCharacterSummary: function(e, d, g, f, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(e) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetCharacter: function(membershipType, accountId, characterId, definitions, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/Account/" + encodeURIComponent(accountId) + "/Character/" + encodeURIComponent(characterId) + "/Complete/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(definitions);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetCharacterInventory: function(membershipType, d, g, f, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/Inventory/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetItemDetail: function(membershipType, d, h, e, g, i, j, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(h) + "/Inventory/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(g);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          i(a)
        }, j)
      },
      GetCharacterActivities: function(membershipType, d, g, f, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/Activities/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetCharacterProgression: function(membershipType, d, g, f, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/Progression/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetAllVendorsForCurrentCharacter: function(membershipType, characterId, definitions, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/MyAccount/Character/" + encodeURIComponent(characterId) + "/Vendors/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(definitions);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetVendorSummariesForCurrentCharacter: function(membershipType, characterId, definitions, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/MyAccount/Character/" + encodeURIComponent(characterId) + "/Vendors/Summaries/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(definitions);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetVendorForCurrentCharacter: function(membershipType, characterId, g, definitions, successCallback, errorCallback, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(membershipType) + "/MyAccount/Character/" + encodeURIComponent(characterId) + "/Vendor/" + encodeURIComponent(g) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(definitions);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          successCallback(a)
        }, errorCallback)
      },
      GetAdvisorsForCurrentCharacter: function(d, f, e, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(d) + "/MyAccount/Character/" + encodeURIComponent(f) + "/Advisors/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      EquipItem: function(f, d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/EquipItem/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
          d(a)
        }, e)
      },
      GetHistoricalStatsDefinition: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/Definition/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.destinyService.destinyData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.destinyService.destinyData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetHistoricalStats: function(e, d, f, h, n, l, g, j, i, k, m, o, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(f) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&periodType=" + encodeURIComponent(h) + "&modes=" + encodeURIComponent(n) + "&groups=" + encodeURIComponent(l) + "&monthstart=" + encodeURIComponent(g) + "&monthend=" + encodeURIComponent(j) + "&daystart=" + encodeURIComponent(i) + "&dayend=" + encodeURIComponent(k);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          m(a)
        }, o)
      },
      GetActivityHistory: function(f, e, g, k, i, l, d, h, j, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/ActivityHistory/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(g) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&mode=" + encodeURIComponent(k) + "&count=" + encodeURIComponent(i) + "&page=" + encodeURIComponent(l) + "&activityDefinitions=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, j)
      },
      GetUniqueWeaponHistory: function(f, d, g, e, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/UniqueWeapons/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(g) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&itemDefinitions=" + encodeURIComponent(e);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetLeaderboards: function(e, d, g, f, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/Leaderboards/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&modes=" + encodeURIComponent(g);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, h)
      },
      GetLeaderboardsForPsn: function(e, g, d, f, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/LeaderboardsForPsn/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&modes=" + encodeURIComponent(e) + "&code=" + encodeURIComponent(g);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, f)
      },
      GetLeaderboardsForCharacter: function(e, d, f, h, g, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/Leaderboards/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(f) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&modes=" + encodeURIComponent(h);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, i)
      },
      GetPostGameCarnageReport: function(e, d, f, g, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/PostGameCarnageReport/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&activityDefinitions=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          f(a)
        }, g)
      },
      GetDestinyAggregateActivityStats: function(f, e, g, d, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/AggregateActivityStats/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(g) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&activityDefinitions=" + encodeURIComponent(d);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetMembershipIdByDisplayName: function(d, e, f, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(d) + "/Stats/GetMembershipIdByDisplayName/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&ignorecase=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetMyGrimoire: function(d, e, f, g, h, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Vanguard/Grimoire/" + encodeURIComponent(d) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(e) + "&flavour=" + encodeURIComponent(f);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          g(a)
        }, h)
      },
      GetGrimoireByMembership: function(d, e, f, g, h, i, c) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Vanguard/Grimoire/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
            b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        b += "&definitions=" + encodeURIComponent(f) + "&flavour=" + encodeURIComponent(g);
        if (typeof c !== "undefined") b += c;
        a = a + b;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          h(a)
        }, i)
      },
      GetGrimoireDefinition: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Vanguard/Grimoire/Definition/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.destinyService.destinyData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.destinyService.destinyData.setCacheItem(a);
          f(a)
        }, g)
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.coreService = {
      dataStore: [],
      coreData: {
        getCacheItem: function(a) {
          return bungieNetPlatform.coreService.dataStore[a + ""]
        },
        setCacheItem: function(a) {
          bungieNetPlatform.coreService.dataStore[a.id + ""] = a
        },
        getCacheSet: function(a) {
          return bungieNetPlatform.coreService.dataStore["Set_" + a]
        },
        setCacheSet: function(a) {
          bungieNetPlatform.coreService.dataStore["Set_" + a.id] = a
        }
      },
      HelloWorld: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "//HelloWorld/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      CacheTest: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "//CacheTest/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      TestUnhandledError: function(d, e, b) {
        var a = bungieNetPlatform.platformSettings.platformUrl + "//TestUnhandledError/",
            c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof b !== "undefined") c += b;
        a = a + c;

        return bungieNetPlatform.serviceLibrary.get(a, function(a) {
          d(a)
        }, e)
      },
      GetAvailableLocales: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "//GetAvailableLocales/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.coreService.coreData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.coreService.coreData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetCommonSettings: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "//Settings/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.coreService.coreData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.coreService.coreData.setCacheItem(a);
          f(a)
        }, g)
      },
      GetGlobalAlert: function(f, g, d) {
        var b = bungieNetPlatform.platformSettings.platformUrl + "//GlobalAlert/",
            e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
        if (typeof d !== "undefined") e += d;
        b = b + e;
        var c = bungieNetPlatform.coreService.coreData.getCacheItem(b);
        if (c) return a.Deferred(function(a) {
          f(c);
          a.resolve(c)
        }).promise();

        return bungieNetPlatform.serviceLibrary.get(b, function(a) {
          bungieNetPlatform.coreService.coreData.setCacheItem(a);
          f(a)
        }, g)
      }
    }
  })(jQuery);
  var CreateBungieProfileRequest = function(h, d, g, e, b, c, a, f) {
    this.displayName = d;
    this.email = g;
    this.emailUsage = e;
    this.credentialPublic = b;
    this.termsAccepted = c;
    this.authProviderType = a;
    this.locale = f
  },
      UserEditRequest = function(s, i, l, n, e, p, r, m, g, k, j, q, a, d, c, b, f, o, h) {
      this.membershipId = i;
      this.displayName = l;
      this.uniqueName = n;
      this.profilePicture = e;
      this.userTitle = p;
      this.about = r;
      this.emailUsage = m;
      this.emailAddress = g;
      this.showActivity = k;
      this.profileTheme = j;
      this.locale = q;
      this.localeInheritDefault = a;
      this.showGroupMessaging = d;
      this.showGamertagPublic = c;
      this.showFacebookPublic = b;
      this.showPsnPublic = f;
      this.adultMode = o;
      this.isThemeLight = h
      },
      NotificationUpdateRequest = function(b, a) {
      this.settings = a
      },
      MobileAppPairing = function(l, h, i, b, j, a, f, g, d, c, k, e) {
      this.ApnLocale = h;
      this.ApnToken = i;
      this.AppInstallationId = b;
      this.AppType = j;
      this.C2dmRegistrationId = a;
      this.DeviceName = f;
      this.DeviceType = g;
      this.MembershipId = d;
      this.MembershipType = c;
      this.PairId = k;
      this.PairingDate = e
      },
      SaveMessageForConversationRequest = function(d, a, b, c) {
      this.conversationId = a;
      this.subject = b;
      this.body = c
      },
      CreateConversationRequest = function(d, a, b, c) {
      this.membersToId = a;
      this.subject = b;
      this.body = c
      },
      EntityList = function(b, a) {
      this.entityIds = a
      },
      LegacySaveMessageRequestV2 = function(f, c, a, d, e, b) {
      this.membersToId = c;
      this.conversationId = a;
      this.subject = d;
      this.body = e;
      this.invitationId = b
      },
      ContentQueryPublic = function(j, a, i, g, h, b, d, f, c, e) {
      this.contentTypes = a;
      this.tag = i;
      this.notTag = g;
      this.sortBy = h;
      this.creationDate = b;
      this.modifiedDate = d;
      this.locSettings = f;
      this.itemsPerPage = c;
      this.currentPage = e
      },
      CreatePostRequest = function(l, d, a, j, k, h, e, f, i, b, c, g) {
      this.parentPostId = d;
      this.subTopicOverride = a;
      this.subject = j;
      this.body = k;
      this.tagInput = h;
      this.tagCategory = e;
      this.category = f;
      this.groupId = i;
      this.isGroupPrivate = b;
      this.urlLinkOrImage = c;
      this.metadata = g
      },
      CreateContentCommentRequest = function(m, f, d, a, k, l, i, e, g, j, b, c, h) {
      this.contentId = f;
      this.parentPostId = d;
      this.subTopicOverride = a;
      this.subject = k;
      this.body = l;
      this.tagInput = i;
      this.tagCategory = e;
      this.category = g;
      this.groupId = j;
      this.isGroupPrivate = b;
      this.urlLinkOrImage = c;
      this.metadata = h
      },
      EditPostRequest = function(j, h, i, g, d, b, f, e, c, a) {
      this.subject = h;
      this.body = i;
      this.tagInput = g;
      this.tagCategory = d;
      this.urlLinkOrImage = b;
      this.metadata = f;
      this.category = e;
      this.disableBits = c;
      this.isGroupPostPrivate = a
      },
      ModerationRequest = function(f, c, b, d, e, a) {
      this.moderatedItemId = c;
      this.moderatedItemType = b;
      this.comments = d;
      this.reason = e;
      this.requestedPunishment = a
      },
      MessageContent = function(c, b, a) {
      this.title = b;
      this.message = a
      },
      MultiMessageContent = function(c, a, b) {
      this.messageContent = a;
      this.targetIds = b
      },
      GroupQuery = function(l, i, d, k, c, a, b, f, j, h, e, g) {
      this.contents = i;
      this.creationDate = d;
      this.sortBy = k;
      this.membershipType = c;
      this.groupRelatableSearchType = a;
      this.groupMemberCountFilter = b;
      this.localeFilter = f;
      this.tagText = j;
      this.tagTextList = h;
      this.itemsPerPage = e;
      this.currentPage = g
      },
      TextParameter = function(c, a, b) {
      this.searchValue = a;
      this.searchType = b
      },
      GroupCreateAction = function(s, c, q, n, o, p, e, r, l, f, a, d, i, j, b, g, h, m, k) {
      this.clanMembershipTypes = c;
      this.name = q;
      this.about = n;
      this.motto = o;
      this.theme = p;
      this.avatarImageIndex = e;
      this.tags = r;
      this.isPublic = l;
      this.membershipOption = f;
      this.isPublicTopicAdminOnly = a;
      this.isDefaultPostPublic = d;
      this.attributes = i;
      this.allowChat = j;
      this.isDefaultPostAlliance = b;
      this.chatSecurity = g;
      this.clanCallsign = h;
      this.locale = m;
      this.homepage = k
      },
      GroupAttribute = function(d, a, c, b) {
      this.attributeId = a;
      this.minValue = c;
      this.maxValue = b
      },
      GroupCreateMinimal = function(c, b, a) {
      this.groupName = b;
      this.groupAbout = a
      },
      GroupEditAction = function(s, l, q, n, o, p, d, r, k, e, a, c, h, i, b, f, g, m, j) {
      this.groupId = l;
      this.name = q;
      this.about = n;
      this.motto = o;
      this.theme = p;
      this.avatarImageIndex = d;
      this.tags = r;
      this.isPublic = k;
      this.membershipOption = e;
      this.isPublicTopicAdminOnly = a;
      this.isDefaultPostPublic = c;
      this.attributes = h;
      this.allowChat = i;
      this.isDefaultPostAlliance = b;
      this.chatSecurity = f;
      this.clanCallsign = g;
      this.locale = m;
      this.homepage = j
      },
      GroupEditActionV2 = function(r, k, p, m, n, o, b, q, j, d, a, g, h, e, f, c, l, i) {
      this.groupId = k;
      this.name = p;
      this.about = m;
      this.motto = n;
      this.theme = o;
      this.avatarImageIndex = b;
      this.tags = q;
      this.isPublic = j;
      this.membershipOption = d;
      this.isPublicTopicAdminOnly = a;
      this.attributes = g;
      this.allowChat = h;
      this.chatSecurity = e;
      this.clanCallsign = f;
      this.defaultPublicity = c;
      this.locale = l;
      this.homepage = i
      },
      GroupApplicationRequest = function(b, a) {
      this.message = a
      },
      GroupApplicationListRequest = function(c, a, b) {
      this.membershipIds = a;
      this.message = b
      },
      GroupBanRequest = function(c, a, b) {
      this.comment = a;
      this.length = b
      },
      IgnoreQuery = function(d, c, a, b) {
      this.itemType = c;
      this.itemsPerPage = a;
      this.currentPage = b
      },
      IgnoreItemRequest = function(h, d, b, f, g, e, c, a) {
      this.ignoredItemId = d;
      this.ignoredItemType = b;
      this.comment = f;
      this.reason = g;
      this.itemContextId = e;
      this.itemContextType = c;
      this.ModeratorRequest = a
      },
      UnignoreItemRequest = function(c, b, a) {
      this.ignoredItemId = b;
      this.ignoredItemType = a
      },
      ReportResolution = function(e, b, c, d, a) {
      this.reportId = b;
      this.reason = c;
      this.result = d;
      this.comments = a
      },
      PagedQuery = function(c, a, b) {
      this.itemsPerPage = a;
      this.currentPage = b
      },
      UserBanRequest = function(c, b, a) {
      this.comment = b;
      this.banExpireDate = a
      },
      IgnoreItemOverrideRequest = function(e, a, c, b, d) {
      this.globalIgnoreEndDate = a;
      this.ignoredItemId = c;
      this.ignoredItemType = b;
      this.comment = d
      },
      CreateBugContract = function(e, a, d, b, c) {
      this.bugDescription = a;
      this.context = d;
      this.loginName = b;
      this.userName = c
      },
      AddAttachmentContract = function(d, c, a, b) {
      this.name = c;
      this.fileType = a;
      this.data = b
      },
      StatsFeedbackContract = function(j, d, i, g, b, h, f, a, c, e) {
      this.userAlias = d;
      this.env = i;
      this.state = g;
      this.statPageUrl = b;
      this.note = h;
      this.statId = f;
      this.characterId = a;
      this.activityId = c;
      this.period = e
      },
      DestinyItemTransferRequest = function(g, c, d, f, a, e, b) {
      this.membershipType = c;
      this.characterId = d;
      this.itemId = f;
      this.itemReferenceHash = a;
      this.stackSize = e;
      this.transferToVault = b
      },
      DestinyItemActionRequest = function(d, a, b, c) {
      this.membershipType = a;
      this.characterId = b;
      this.itemId = c
      },
      GeneralUser = {
      membershipId: 0,
      uniqueName: [],
      normalizedName: [],
      displayName: [],
      profilePicture: 0,
      profileTheme: 0,
      userTitle: 0,
      successMessageFlags: 0,
      isDeleted: false,
      about: [],
      firstAccess: null,
      lastUpdate: null,
      legacyPortalUID: 0,
      context: {
        isFollowing: false,
        ignoreStatus: {
          isIgnored: false,
          ignoreFlags: 0
        },
        globalIgnoreEndDate: null
      },
      banExpireDate: null,
      psnDisplayName: [],
      xboxDisplayName: [],
      fbDisplayName: [],
      showActivity: false,
      followerCount: 0,
      globalIgnoreEndDate: null,
      isThemeLight: false,
      adultMode: false,
      locale: [],
      localeInheritDefault: false,
      lastBanReportId: 0,
      showGroupMessaging: false,
      profilePicturePath: [],
      profileThemeName: [],
      userTitleDisplay: []
      },
      UserToUserContext = {
      isFollowing: false,
      ignoreStatus: {
        isIgnored: false,
        ignoreFlags: 0
      },
      globalIgnoreEndDate: null
      },
      IgnoreResponse = {
      isIgnored: false,
      ignoreFlags: 0
      },
      UserDetail = {
      user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      },
      clans: [],
      foundedGroups: [],
      email: [],
      emailStatus: 0,
      emailUsage: 0,
      realName: [],
      gamerTag: [],
      psnId: [],
      facebookName: [],
      userAcls: [],
      showGamertagPublic: false,
      showFacebookPublic: false,
      showPsnPublic: false,
      publicCredentialTypes: [],
      isThemeLight: false,
      adultMode: false,
      userResearchStatusFlags: 0
      },
      GroupResponse = {
      detail: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null,
        modificationDate: null,
        groupType: 0,
        about: [],
        isDeleted: false,
        deletionDate: null,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: false,
        isMembershipClosed: false,
        isMembershipReviewed: false,
        isPublicTopicAdminOnly: false,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: false,
        isDefaultPostPublic: false,
        isDefaultPostAlliance: false,
        chatSecurity: 0,
        locale: [],
        globalIgnoreEndDate: null,
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: false,
        conversationId: 0
      },
      founderMembershipId: 0,
      founder: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      },
      followerCount: 0,
      currentUserStatus: {
        isFollowing: false,
        membershipStatus: {
          Response: {
            user: {
              membershipId: 0,
              uniqueName: [],
              normalizedName: [],
              displayName: [],
              profilePicture: 0,
              profileTheme: 0,
              userTitle: 0,
              successMessageFlags: 0,
              isDeleted: false,
              about: [],
              firstAccess: null,
              lastUpdate: null,
              legacyPortalUID: 0,
              context: {
                isFollowing: false,
                ignoreStatus: {
                  isIgnored: false,
                  ignoreFlags: 0
                },
                globalIgnoreEndDate: null
              },
              banExpireDate: null,
              psnDisplayName: [],
              xboxDisplayName: [],
              fbDisplayName: [],
              showActivity: false,
              followerCount: 0,
              globalIgnoreEndDate: null,
              isThemeLight: false,
              adultMode: false,
              locale: [],
              localeInheritDefault: false,
              lastBanReportId: 0,
              showGroupMessaging: false,
              profilePicturePath: [],
              profileThemeName: [],
              userTitleDisplay: []
            },
            clanMembershipTypes: [],
            groupId: 0,
            membershipId: 0,
            hasPendingApplication: false,
            isMember: false,
            hasRated: false,
            approvalDate: null,
            approvedByMembershipId: 0,
            deactivationDate: null,
            deactivatedByMembershipId: 0,
            rating: 0,
            memberType: 0,
            isOriginalFounder: false
          },
          ErrorCode: 0,
          ThrottleSeconds: 0,
          ErrorStatus: [],
          Message: [],
          MessageData: []
        }
      },
      alliedIds: [],
      attributes: [],
      membershipIds: [],
      clanMembershipTypes: [],
      parentGroup: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null,
        modificationDate: null,
        groupType: 0,
        about: [],
        isDeleted: false,
        deletionDate: null,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: false,
        isMembershipClosed: false,
        isMembershipReviewed: false,
        isPublicTopicAdminOnly: false,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: false,
        isDefaultPostPublic: false,
        isDefaultPostAlliance: false,
        chatSecurity: 0,
        locale: [],
        globalIgnoreEndDate: null,
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: false,
        conversationId: 0
      },
      allianceStatus: 0,
      friends: [],
      groupJoinRequestCount: 0,
      groupJoinInviteCount: 0,
      clanJoinRequestCount: 0,
      clanJoinInviteCount: 0
      },
      Group = {
      groupId: 0,
      name: [],
      membershipIdCreated: 0,
      creationDate: null,
      modificationDate: null,
      groupType: 0,
      about: [],
      isDeleted: false,
      deletionDate: null,
      deletedByMembershipId: 0,
      tags: [],
      rating: 0,
      ratingCount: 0,
      memberCount: 0,
      pendingMemberCount: 0,
      isPublic: false,
      isMembershipClosed: false,
      isMembershipReviewed: false,
      isPublicTopicAdminOnly: false,
      primaryAlliedGroupId: 0,
      motto: [],
      clanCallsign: [],
      allowChat: false,
      isDefaultPostPublic: false,
      isDefaultPostAlliance: false,
      chatSecurity: 0,
      locale: [],
      globalIgnoreEndDate: null,
      avatarImageIndex: 0,
      founderMembershipId: 0,
      homepage: 0,
      membershipOption: 0,
      defaultPublicity: 0,
      theme: [],
      bannerPath: [],
      avatarPath: [],
      isAllianceOwner: false,
      conversationId: 0
      },
      GroupUserStatus = {
      isFollowing: false,
      membershipStatus: {
        Response: {
          user: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: false,
            about: [],
            firstAccess: null,
            lastUpdate: null,
            legacyPortalUID: 0,
            context: {
              isFollowing: false,
              ignoreStatus: {
                isIgnored: false,
                ignoreFlags: 0
              },
              globalIgnoreEndDate: null
            },
            banExpireDate: null,
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: false,
            followerCount: 0,
            globalIgnoreEndDate: null,
            isThemeLight: false,
            adultMode: false,
            locale: [],
            localeInheritDefault: false,
            lastBanReportId: 0,
            showGroupMessaging: false,
            profilePicturePath: [],
            profileThemeName: [],
            userTitleDisplay: []
          },
          clanMembershipTypes: [],
          groupId: 0,
          membershipId: 0,
          hasPendingApplication: false,
          isMember: false,
          hasRated: false,
          approvalDate: null,
          approvedByMembershipId: 0,
          deactivationDate: null,
          deactivatedByMembershipId: 0,
          rating: 0,
          memberType: 0,
          isOriginalFounder: false
        },
        ErrorCode: 0,
        ThrottleSeconds: 0,
        ErrorStatus: [],
        Message: [],
        MessageData: []
      }
      },
      GroupMemberDetail = {
      user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      },
      clanMembershipTypes: [],
      groupId: 0,
      membershipId: 0,
      hasPendingApplication: false,
      isMember: false,
      hasRated: false,
      approvalDate: null,
      approvedByMembershipId: 0,
      deactivationDate: null,
      deactivatedByMembershipId: 0,
      rating: 0,
      memberType: 0,
      isOriginalFounder: false
      },
      GroupClanPlatform = {
      membershipType: 0,
      memberCount: 0,
      membershipOption: 0
      },
      Friend = {
      friendType: 0,
      platformUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
      },
      bungieNetUserInfo: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      },
      onlineStatus: 0,
      presenceString: []
      },
      UserInfoCard = {
      supplementalDisplayName: [],
      iconPath: [],
      membershipType: 0,
      membershipId: 0,
      displayName: []
      },
      UserCounts = {
      onlineFriendCount: 0,
      notificationCount: 0,
      messageCount: 0,
      groupMessageCounts: [],
      needReauth: 0
      },
      GroupItemCount = {
      groupId: 0,
      count: 0,
      conversationId: 0
      },
      UserAlias = {
      userAliasId: 0,
      membershipId: 0,
      akaDisplayName: [],
      akaUniqueName: [],
      changedDate: null
      },
      BungieAccount = {
      destinyAccountResult: 0,
      destinyAccounts: [],
      bungieNetUser: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      }
      },
      DestinyAccountBrief = {
      userInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
      },
      grimoireScore: 0,
      clanName: [],
      clanTag: [],
      characters: [],
      lastPlayed: null
      },
      DestinyCharacterBrief = {
      characterId: 0,
      raceHash: {},
      genderHash: {},
      classHash: {},
      emblemHash: {},
      race: {
        raceHash: {},
        raceType: 0,
        raceName: [],
        raceDescription: []
      },
      gender: {
        genderHash: {},
        genderType: 0,
        genderName: [],
        genderDescription: []
      },
      characterClass: {
        classHash: {},
        classType: 0,
        className: [],
        classDescription: [],
        classIdentifier: [],
        mentorVendorIdentifier: []
      },
      emblemPath: [],
      backgroundPath: [],
      level: 0,
      powerLevel: 0,
      dateLastPlayed: null,
      membershipId: 0,
      membershipType: 0,
      levelProgression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
      }
      },
      DestinyRaceDefinition = {
      raceHash: {},
      raceType: 0,
      raceName: [],
      raceDescription: []
      },
      DestinyGenderDefinition = {
      genderHash: {},
      genderType: 0,
      genderName: [],
      genderDescription: []
      },
      DestinyClassDefinition = {
      classHash: {},
      classType: 0,
      className: [],
      classDescription: [],
      classIdentifier: [],
      mentorVendorIdentifier: []
      },
      DestinyProgression = {
      dailyProgress: 0,
      weeklyProgress: 0,
      currentProgress: 0,
      level: 0,
      step: 0,
      progressToNextLevel: 0,
      nextLevelAt: 0,
      progressionHash: {}
      },
      SearchResultOfGeneralUser = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      NotificationSetting = {
      notificationSettingId: 0,
      membershipId: 0,
      optInFlags: 0,
      scheduleFlags: 0,
      notificationMethod: 0,
      notificationType: 0,
      displayName: [],
      settingDescription: []
      },
      GetCredentialTypesForAccountResponse = {
      credentialType: 0,
      credentialDisplayName: [],
      isPublic: false
      },
      UserTheme = {
      userThemeId: 0,
      userThemeName: [],
      userThemeDescription: []
      },
      MessageConversationResponse = {
      users: [],
      invitationDetail: {
        invitationId: 0,
        membershipId: 0,
        resolutionStatus: 0,
        expireDate: null,
        invitationType: 0,
        requestingObjectId: 0,
        targetObjectId: 0,
        targetState: 0,
        requestMessage: [],
        responseMessage: [],
        responseCode: [],
        hasExpired: false,
        message: []
      },
      group: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null,
        modificationDate: null,
        groupType: 0,
        about: [],
        isDeleted: false,
        deletionDate: null,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: false,
        isMembershipClosed: false,
        isMembershipReviewed: false,
        isPublicTopicAdminOnly: false,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: false,
        isDefaultPostPublic: false,
        isDefaultPostAlliance: false,
        chatSecurity: 0,
        locale: [],
        globalIgnoreEndDate: null,
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: false,
        conversationId: 0
      },
      detail: {
        conversationId: 0,
        memberFromId: 0,
        dateStarted: null,
        totalMessageCount: 0,
        lastMessageSent: null,
        lastMessageId: 0,
        isGlobal: false,
        isLocked: false,
        invitationId: 0,
        starter: 0,
        lastRead: null,
        status: 0,
        subject: [],
        body: [],
        isAutoResponse: false,
        isRead: false,
        ownerEntityId: 0,
        ownerEntityType: 0
      },
      participants: []
      },
      InvitationResponseCodeDetail = {
      invitationId: 0,
      membershipId: 0,
      resolutionStatus: 0,
      expireDate: null,
      invitationType: 0,
      requestingObjectId: 0,
      targetObjectId: 0,
      targetState: 0,
      requestMessage: [],
      responseMessage: [],
      responseCode: [],
      hasExpired: false,
      message: []
      },
      MessageConversation = {
      conversationId: 0,
      memberFromId: 0,
      dateStarted: null,
      totalMessageCount: 0,
      lastMessageSent: null,
      lastMessageId: 0,
      isGlobal: false,
      isLocked: false,
      invitationId: 0,
      starter: 0,
      lastRead: null,
      status: 0,
      subject: [],
      body: [],
      isAutoResponse: false,
      isRead: false,
      ownerEntityId: 0,
      ownerEntityType: 0
      },
      MessageConversationMember = {
      membershipId: 0,
      isDeleted: false
      },
      MessageSearchResult = {
      users: [],
      invitationDetails: [],
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      Message = {
      messageId: 0,
      conversationId: 0,
      dateSent: null,
      subject: [],
      body: [],
      folderId: 0,
      systemId: 0,
      isAutoResponse: false,
      memberFromId: 0,
      isDeleted: false,
      invitationId: 0
      },
      MessageConversationSearchResult = {
      users: [],
      invitationDetails: [],
      groups: [],
      unreadCount: 0,
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      MessageConversationDetail = {
      detail: {
        conversationId: 0,
        memberFromId: 0,
        dateStarted: null,
        totalMessageCount: 0,
        lastMessageSent: null,
        lastMessageId: 0,
        isGlobal: false,
        isLocked: false,
        invitationId: 0,
        starter: 0,
        lastRead: null,
        status: 0,
        subject: [],
        body: [],
        isAutoResponse: false,
        isRead: false,
        ownerEntityId: 0,
        ownerEntityType: 0
      },
      participants: []
      },
      EntityActionResult = {
      entityId: 0,
      result: 0
      },
      Invitation = {
      invitationId: 0,
      invitationType: 0,
      dateCreated: null,
      dateResolved: null,
      expireDate: null,
      membershipIdCreated: 0,
      membershipIdResolved: 0,
      requestingObjectId: 0,
      resolutionStatus: 0,
      targetObjectId: 0,
      targetState: 0,
      requestMessage: [],
      responseMessage: [],
      isExpired: false
      },
      GroupInvitationSearchResponse = {
      groups: [],
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      LegacyConversationV2 = {
      conversationId: 0,
      memberFromId: 0,
      dateStarted: null,
      totalMessageCount: 0,
      lastMessageSent: null,
      lastMessageId: 0,
      isGlobal: false,
      isLocked: false,
      memberToId: 0,
      invitationId: 0,
      ownerEntityType: 0,
      ownerEntityId: 0,
      starter: 0,
      lastRead: null,
      status: 0,
      subject: [],
      body: [],
      isAutoResponse: false,
      membersToId: [],
      usersTo: [],
      invitationDetail: {
        invitationId: 0,
        membershipId: 0,
        resolutionStatus: 0,
        expireDate: null,
        invitationType: 0,
        requestingObjectId: 0,
        targetObjectId: 0,
        targetState: 0,
        requestMessage: [],
        responseMessage: [],
        responseCode: [],
        hasExpired: false,
        message: []
      },
      isRead: false
      },
      LegacyConversationResponse = {
      conversations: [],
      unreadCount: 0
      },
      NotificationResponse = {
      notifications: [],
      invitations: [],
      tagActivityCount: 0,
      groupActivityCount: 0
      },
      ContentTypeDescription = {
      cType: [],
      name: [],
      contentDescription: [],
      previewImage: [],
      reminder: [],
      properties: [],
      tagMetadata: [],
      tagMetadataItems: [],
      usageExamples: [],
      showInContentEditor: false,
      typeOf: [],
      bindIdentifierToProperty: [],
      boundRegex: [],
      allowComments: false,
      bulkUploadable: false,
      previews: [],
      propertySections: []
      },
      ContentTypeProperty = {
      name: [],
      readableName: [],
      value: [],
      propertyDescription: [],
      localizable: false,
      fallback: false,
      enabled: false,
      order: 0,
      visible: false,
      required: false,
      maxLength: 0,
      regexp: [],
      validateAs: [],
      rssAttribute: [],
      visibleDependency: [],
      visibleOn: [],
      datatype: 0,
      attributes: [],
      childProperties: [],
      contentTypeAllowed: [],
      bindToProperty: [],
      boundRegex: [],
      representationSelection: [],
      defaultValues: [],
      isExternalAllowed: false,
      propertySection: []
      },
      ContentTypeDefaultValue = {
      whenClause: [],
      whenValue: [],
      defaultValue: []
      },
      TagMetadataDefinition = {
      description: [],
      order: 0,
      items: [],
      datatype: [],
      name: [],
      isRequired: false
      },
      TagMetadataItem = {
      description: [],
      tagText: [],
      groups: [],
      isDefault: false,
      name: []
      },
      ContentPreview = {
      name: [],
      path: [],
      itemInSet: false,
      setTag: [],
      setNesting: 0,
      useSetId: 0
      },
      ContentTypePropertySection = {
      name: [],
      readableName: [],
      visibleDependency: [],
      visibleOn: []
      },
      ContentItemPublicContract = {
      contentId: 0,
      cType: [],
      cmsPath: [],
      creationDate: null,
      modifyDate: null,
      allowComments: false,
      hasAgeGate: false,
      minimumAge: 0,
      ratingImagePath: [],
      authorMembershipId: 0,
      author: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      },
      autoEnglishPropertyFallback: false,
      properties: [],
      representations: [],
      tags: [],
      hasGoneLive: false,
      isDeletedLive: false,
      commentSummary: {
        topicId: 0,
        commentCount: 0
      }
      },
      CommentSummary = {
      topicId: 0,
      commentCount: 0
      },
      ContentRepresentation = {
      name: [],
      path: []
      },
      SearchResultOfContentItemPublicContract = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      FrontPageContentResponse = {
      rotator: {
        Response: {
          contentId: 0,
          cType: [],
          cmsPath: [],
          creationDate: null,
          modifyDate: null,
          allowComments: false,
          hasAgeGate: false,
          minimumAge: 0,
          ratingImagePath: [],
          authorMembershipId: 0,
          author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: false,
            about: [],
            firstAccess: null,
            lastUpdate: null,
            legacyPortalUID: 0,
            context: {
              isFollowing: false,
              ignoreStatus: {
                isIgnored: false,
                ignoreFlags: 0
              },
              globalIgnoreEndDate: null
            },
            banExpireDate: null,
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: false,
            followerCount: 0,
            globalIgnoreEndDate: null,
            isThemeLight: false,
            adultMode: false,
            locale: [],
            localeInheritDefault: false,
            lastBanReportId: 0,
            showGroupMessaging: false,
            profilePicturePath: [],
            profileThemeName: [],
            userTitleDisplay: []
          },
          autoEnglishPropertyFallback: false,
          properties: [],
          representations: [],
          tags: [],
          hasGoneLive: false,
          isDeletedLive: false,
          commentSummary: {
            topicId: 0,
            commentCount: 0
          }
        },
        ErrorCode: 0,
        ThrottleSeconds: 0,
        ErrorStatus: [],
        Message: [],
        MessageData: []
      },
      blog: {
        Response: [],
        ErrorCode: 0,
        ThrottleSeconds: 0,
        ErrorStatus: [],
        Message: [],
        MessageData: []
      },
      calloutSet: {
        Response: {
          contentId: 0,
          cType: [],
          cmsPath: [],
          creationDate: null,
          modifyDate: null,
          allowComments: false,
          hasAgeGate: false,
          minimumAge: 0,
          ratingImagePath: [],
          authorMembershipId: 0,
          author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: false,
            about: [],
            firstAccess: null,
            lastUpdate: null,
            legacyPortalUID: 0,
            context: {
              isFollowing: false,
              ignoreStatus: {
                isIgnored: false,
                ignoreFlags: 0
              },
              globalIgnoreEndDate: null
            },
            banExpireDate: null,
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: false,
            followerCount: 0,
            globalIgnoreEndDate: null,
            isThemeLight: false,
            adultMode: false,
            locale: [],
            localeInheritDefault: false,
            lastBanReportId: 0,
            showGroupMessaging: false,
            profilePicturePath: [],
            profileThemeName: [],
            userTitleDisplay: []
          },
          autoEnglishPropertyFallback: false,
          properties: [],
          representations: [],
          tags: [],
          hasGoneLive: false,
          isDeletedLive: false,
          commentSummary: {
            topicId: 0,
            commentCount: 0
          }
        },
        ErrorCode: 0,
        ThrottleSeconds: 0,
        ErrorStatus: [],
        Message: [],
        MessageData: []
      }
      },
      DestinyContentResponse = {
      aboutContent: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null,
        modifyDate: null,
        allowComments: false,
        hasAgeGate: false,
        minimumAge: 0,
        ratingImagePath: [],
        authorMembershipId: 0,
        author: {
          membershipId: 0,
          uniqueName: [],
          normalizedName: [],
          displayName: [],
          profilePicture: 0,
          profileTheme: 0,
          userTitle: 0,
          successMessageFlags: 0,
          isDeleted: false,
          about: [],
          firstAccess: null,
          lastUpdate: null,
          legacyPortalUID: 0,
          context: {
            isFollowing: false,
            ignoreStatus: {
              isIgnored: false,
              ignoreFlags: 0
            },
            globalIgnoreEndDate: null
          },
          banExpireDate: null,
          psnDisplayName: [],
          xboxDisplayName: [],
          fbDisplayName: [],
          showActivity: false,
          followerCount: 0,
          globalIgnoreEndDate: null,
          isThemeLight: false,
          adultMode: false,
          locale: [],
          localeInheritDefault: false,
          lastBanReportId: 0,
          showGroupMessaging: false,
          profilePicturePath: [],
          profileThemeName: [],
          userTitleDisplay: []
        },
        autoEnglishPropertyFallback: false,
        properties: [],
        representations: [],
        tags: [],
        hasGoneLive: false,
        isDeletedLive: false,
        commentSummary: {
          topicId: 0,
          commentCount: 0
        }
      },
      mediaBuckets: []
      },
      ContentBucket = {
      ContentId: 0,
      Title: [],
      Items: []
      },
      DestinyContentResponseV2 = {
      TopSet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null,
        modifyDate: null,
        allowComments: false,
        hasAgeGate: false,
        minimumAge: 0,
        ratingImagePath: [],
        authorMembershipId: 0,
        author: {
          membershipId: 0,
          uniqueName: [],
          normalizedName: [],
          displayName: [],
          profilePicture: 0,
          profileTheme: 0,
          userTitle: 0,
          successMessageFlags: 0,
          isDeleted: false,
          about: [],
          firstAccess: null,
          lastUpdate: null,
          legacyPortalUID: 0,
          context: {
            isFollowing: false,
            ignoreStatus: {
              isIgnored: false,
              ignoreFlags: 0
            },
            globalIgnoreEndDate: null
          },
          banExpireDate: null,
          psnDisplayName: [],
          xboxDisplayName: [],
          fbDisplayName: [],
          showActivity: false,
          followerCount: 0,
          globalIgnoreEndDate: null,
          isThemeLight: false,
          adultMode: false,
          locale: [],
          localeInheritDefault: false,
          lastBanReportId: 0,
          showGroupMessaging: false,
          profilePicturePath: [],
          profileThemeName: [],
          userTitleDisplay: []
        },
        autoEnglishPropertyFallback: false,
        properties: [],
        representations: [],
        tags: [],
        hasGoneLive: false,
        isDeletedLive: false,
        commentSummary: {
          topicId: 0,
          commentCount: 0
        }
      },
      StorySet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null,
        modifyDate: null,
        allowComments: false,
        hasAgeGate: false,
        minimumAge: 0,
        ratingImagePath: [],
        authorMembershipId: 0,
        author: {
          membershipId: 0,
          uniqueName: [],
          normalizedName: [],
          displayName: [],
          profilePicture: 0,
          profileTheme: 0,
          userTitle: 0,
          successMessageFlags: 0,
          isDeleted: false,
          about: [],
          firstAccess: null,
          lastUpdate: null,
          legacyPortalUID: 0,
          context: {
            isFollowing: false,
            ignoreStatus: {
              isIgnored: false,
              ignoreFlags: 0
            },
            globalIgnoreEndDate: null
          },
          banExpireDate: null,
          psnDisplayName: [],
          xboxDisplayName: [],
          fbDisplayName: [],
          showActivity: false,
          followerCount: 0,
          globalIgnoreEndDate: null,
          isThemeLight: false,
          adultMode: false,
          locale: [],
          localeInheritDefault: false,
          lastBanReportId: 0,
          showGroupMessaging: false,
          profilePicturePath: [],
          profileThemeName: [],
          userTitleDisplay: []
        },
        autoEnglishPropertyFallback: false,
        properties: [],
        representations: [],
        tags: [],
        hasGoneLive: false,
        isDeletedLive: false,
        commentSummary: {
          topicId: 0,
          commentCount: 0
        }
      },
      GuardianSet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null,
        modifyDate: null,
        allowComments: false,
        hasAgeGate: false,
        minimumAge: 0,
        ratingImagePath: [],
        authorMembershipId: 0,
        author: {
          membershipId: 0,
          uniqueName: [],
          normalizedName: [],
          displayName: [],
          profilePicture: 0,
          profileTheme: 0,
          userTitle: 0,
          successMessageFlags: 0,
          isDeleted: false,
          about: [],
          firstAccess: null,
          lastUpdate: null,
          legacyPortalUID: 0,
          context: {
            isFollowing: false,
            ignoreStatus: {
              isIgnored: false,
              ignoreFlags: 0
            },
            globalIgnoreEndDate: null
          },
          banExpireDate: null,
          psnDisplayName: [],
          xboxDisplayName: [],
          fbDisplayName: [],
          showActivity: false,
          followerCount: 0,
          globalIgnoreEndDate: null,
          isThemeLight: false,
          adultMode: false,
          locale: [],
          localeInheritDefault: false,
          lastBanReportId: 0,
          showGroupMessaging: false,
          profilePicturePath: [],
          profileThemeName: [],
          userTitleDisplay: []
        },
        autoEnglishPropertyFallback: false,
        properties: [],
        representations: [],
        tags: [],
        hasGoneLive: false,
        isDeletedLive: false,
        commentSummary: {
          topicId: 0,
          commentCount: 0
        }
      },
      FrontierSet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null,
        modifyDate: null,
        allowComments: false,
        hasAgeGate: false,
        minimumAge: 0,
        ratingImagePath: [],
        authorMembershipId: 0,
        author: {
          membershipId: 0,
          uniqueName: [],
          normalizedName: [],
          displayName: [],
          profilePicture: 0,
          profileTheme: 0,
          userTitle: 0,
          successMessageFlags: 0,
          isDeleted: false,
          about: [],
          firstAccess: null,
          lastUpdate: null,
          legacyPortalUID: 0,
          context: {
            isFollowing: false,
            ignoreStatus: {
              isIgnored: false,
              ignoreFlags: 0
            },
            globalIgnoreEndDate: null
          },
          banExpireDate: null,
          psnDisplayName: [],
          xboxDisplayName: [],
          fbDisplayName: [],
          showActivity: false,
          followerCount: 0,
          globalIgnoreEndDate: null,
          isThemeLight: false,
          adultMode: false,
          locale: [],
          localeInheritDefault: false,
          lastBanReportId: 0,
          showGroupMessaging: false,
          profilePicturePath: [],
          profileThemeName: [],
          userTitleDisplay: []
        },
        autoEnglishPropertyFallback: false,
        properties: [],
        representations: [],
        tags: [],
        hasGoneLive: false,
        isDeletedLive: false,
        commentSummary: {
          topicId: 0,
          commentCount: 0
        }
      },
      EnemySet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null,
        modifyDate: null,
        allowComments: false,
        hasAgeGate: false,
        minimumAge: 0,
        ratingImagePath: [],
        authorMembershipId: 0,
        author: {
          membershipId: 0,
          uniqueName: [],
          normalizedName: [],
          displayName: [],
          profilePicture: 0,
          profileTheme: 0,
          userTitle: 0,
          successMessageFlags: 0,
          isDeleted: false,
          about: [],
          firstAccess: null,
          lastUpdate: null,
          legacyPortalUID: 0,
          context: {
            isFollowing: false,
            ignoreStatus: {
              isIgnored: false,
              ignoreFlags: 0
            },
            globalIgnoreEndDate: null
          },
          banExpireDate: null,
          psnDisplayName: [],
          xboxDisplayName: [],
          fbDisplayName: [],
          showActivity: false,
          followerCount: 0,
          globalIgnoreEndDate: null,
          isThemeLight: false,
          adultMode: false,
          locale: [],
          localeInheritDefault: false,
          lastBanReportId: 0,
          showGroupMessaging: false,
          profilePicturePath: [],
          profileThemeName: [],
          userTitleDisplay: []
        },
        autoEnglishPropertyFallback: false,
        properties: [],
        representations: [],
        tags: [],
        hasGoneLive: false,
        isDeletedLive: false,
        commentSummary: {
          topicId: 0,
          commentCount: 0
        }
      },
      MediaBuckets: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null,
        modifyDate: null,
        allowComments: false,
        hasAgeGate: false,
        minimumAge: 0,
        ratingImagePath: [],
        authorMembershipId: 0,
        author: {
          membershipId: 0,
          uniqueName: [],
          normalizedName: [],
          displayName: [],
          profilePicture: 0,
          profileTheme: 0,
          userTitle: 0,
          successMessageFlags: 0,
          isDeleted: false,
          about: [],
          firstAccess: null,
          lastUpdate: null,
          legacyPortalUID: 0,
          context: {
            isFollowing: false,
            ignoreStatus: {
              isIgnored: false,
              ignoreFlags: 0
            },
            globalIgnoreEndDate: null
          },
          banExpireDate: null,
          psnDisplayName: [],
          xboxDisplayName: [],
          fbDisplayName: [],
          showActivity: false,
          followerCount: 0,
          globalIgnoreEndDate: null,
          isThemeLight: false,
          adultMode: false,
          locale: [],
          localeInheritDefault: false,
          lastBanReportId: 0,
          showGroupMessaging: false,
          profilePicturePath: [],
          profileThemeName: [],
          userTitleDisplay: []
        },
        autoEnglishPropertyFallback: false,
        properties: [],
        representations: [],
        tags: [],
        hasGoneLive: false,
        isDeletedLive: false,
        commentSummary: {
          topicId: 0,
          commentCount: 0
        }
      },
      PressReleases: {
        totalResults: 0,
        results: [],
        hasMore: false,
        query: {
          itemsPerPage: 0,
          currentPage: 0
        }
      }
      },
      ExternalMessage = {
      dateCreated: null,
      message: [],
      service: 0,
      extendedData: []
      },
      PostResponse = {
      popularity: 0,
      isActive: false,
      isAnnouncement: false,
      userRating: 0,
      userHasRated: false,
      userHasMutedPost: false,
      latestReplyPostId: 0,
      latestReplyAuthorId: 0,
      ignoreStatus: {
        isIgnored: false,
        ignoreFlags: 0
      },
      postId: {},
      parentPostId: {},
      topicId: {},
      lastReplyId: {},
      threadDepth: 0,
      category: 0,
      authorMembershipId: 0,
      editorMembershipId: 0,
      subject: [],
      body: [],
      urlLinkOrImage: [],
      metadata: {},
      creationDate: null,
      lastModified: null,
      lastReplyDate: null,
      editCount: 0,
      replyCount: 0,
      topicReplyCount: 0,
      ratingCount: 0,
      rating: 0,
      groupOwnerId: 0,
      isGroupPrivate: false,
      actualIsGroupPrivate: false,
      parentGroupId: 0,
      parentTopicId: 0,
      flags: 0,
      lockedForReplies: false,
      parentAuthorId: 0,
      topicAuthorId: 0,
      tags: [],
      isTopicBanned: false,
      actualParentPostId: 0,
      tagIds: []
      },
      PostSearchResponse = {
      relatedPosts: [],
      authors: [],
      groups: [],
      searchedTags: [],
      polls: [],
      availablePages: 0,
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      TagResponse = {
      tagText: [],
      ignoreStatus: {
        isIgnored: false,
        ignoreFlags: 0
      },
      globalIgnoreEndDate: null
      },
      PollResponse = {
      topicId: 0,
      results: [],
      totalVotes: 0
      },
      PollResult = {
      answerText: [],
      answerSlot: 0,
      lastVoteDate: null,
      votes: 0,
      requestingUserVoted: false
      },
      AggregatedActivitySearchResponse = {
      users: [],
      groups: [],
      posts: [],
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      AggregatedActivityMessage = {
      activity: {
        activityType: 0,
        affectedItemId: 0,
        affectedItemType: 0,
        mostRecentDate: null,
        count: 0,
        activities: [],
        followers: [],
        aggregationType: 0,
        tagText: []
      },
      message: [],
      messageTemplate: []
      },
      AggregatedActivity = {
      activityType: 0,
      affectedItemId: 0,
      affectedItemType: 0,
      mostRecentDate: null,
      count: 0,
      activities: [],
      followers: [],
      aggregationType: 0,
      tagText: []
      },
      Activity = {
      activityId: 0,
      activityType: 0,
      affectedItemId: 0,
      affectedItemType: 0,
      membershipId: 0,
      creationDate: null,
      affectedItemSubtype: 0,
      relatedMembershipId: 0,
      relatedItemId: 0,
      affectedItemDescription: [],
      relatedItemDescription: [],
      groupId: 0
      },
      SearchResultOfFollowingResponse = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      FollowingResponse = {
      detail: {
        displayName: [],
        avatarImage: [],
        sourceMissing: false,
        memberType: 0,
        allianceStatus: 0
      },
      following: {
        identifier: [],
        entityType: [],
        activityCount: 0
      }
      },
      FollowingDecorations = {
      displayName: [],
      avatarImage: [],
      sourceMissing: false,
      memberType: 0,
      allianceStatus: 0
      },
      Following = {
      identifier: [],
      entityType: [],
      activityCount: 0
      },
      GroupSearchResponse = {
      founders: [],
      relatedGroups: [],
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      SearchResultOfFollowerResponse = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      FollowerResponse = {
      user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      },
      dateFollowed: null
      },
      ActivityMessageSearchResponse = {
      users: [],
      groups: [],
      posts: [],
      tags: [],
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      ActivityMessage = {
      activity: {
        activityId: 0,
        activityType: 0,
        affectedItemId: 0,
        affectedItemType: 0,
        membershipId: 0,
        creationDate: null,
        affectedItemSubtype: 0,
        relatedMembershipId: 0,
        relatedItemId: 0,
        affectedItemDescription: [],
        relatedItemDescription: [],
        groupId: 0
      },
      message: [],
      messageTemplate: []
      },
      LegacyFriendSearchResponse = {
      users: [],
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      LegacyFriend = {
      credentialType: 0,
      platform: [],
      platformDisplayName: [],
      bungieNetMembershipId: 0,
      statusCode: 0,
      status: [],
      imagePath: [],
      destinyMembershipId: 0
      },
      SearchResultOfFriend = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      GroupTheme = {
      name: [],
      folder: [],
      description: []
      },
      SearchResultOfGroupMemberApplication = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      GroupMemberApplication = {
      groupId: 0,
      membershipId: 0,
      creationDate: null,
      resolveState: 0,
      resolveDate: null,
      resolvedByMembershipId: 0,
      requestMessage: [],
      resolveMessage: [],
      user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      }
      },
      GroupAttributeCategoryDefinition = {
      categoryId: 0,
      key: [],
      displayName: [],
      attributes: []
      },
      GroupAttributeDefinition = {
      attributeId: 0,
      key: [],
      displayName: [],
      defaultMinimum: 0,
      defaultMaximum: 0,
      attributeType: 0,
      minimumLabel: [],
      maximumLabel: [],
      tooltips: [],
      minimum: 0,
      maximum: 0,
      stepIncrement: 0,
      stepCount: 0
      },
      SearchResultOfGroupMemberDetail = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      SearchResultOfGroup = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      SearchResultOfGroupBanResponse = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      GroupBanResponse = {
      groupId: 0,
      lastModifiedMembershipId: 0,
      lastModifiedDisplayName: [],
      createdMembershipId: 0,
      createdDisplayName: [],
      dateBanned: null,
      dateExpires: null,
      comment: [],
      flags: 0,
      user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      }
      },
      IgnoreSearchResult = {
      tags: [],
      groups: [],
      posts: [],
      users: [],
      totalResults: 0,
      hasMore: false,
      availablePages: 0,
      currentPage: 0,
      itemsPerPage: 0
      },
      IgnoreDetailResponseTag = {
      tagText: [],
      displayName: [],
      dateCreated: null,
      dateExpires: null,
      dateModified: null,
      comment: [],
      flags: 0,
      reason: 0
      },
      IgnoreDetailResponseGroup = {
      group: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null,
        modificationDate: null,
        groupType: 0,
        about: [],
        isDeleted: false,
        deletionDate: null,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: false,
        isMembershipClosed: false,
        isMembershipReviewed: false,
        isPublicTopicAdminOnly: false,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: false,
        isDefaultPostPublic: false,
        isDefaultPostAlliance: false,
        chatSecurity: 0,
        locale: [],
        globalIgnoreEndDate: null,
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: false,
        conversationId: 0
      },
      displayName: [],
      dateCreated: null,
      dateExpires: null,
      dateModified: null,
      comment: [],
      flags: 0,
      reason: 0
      },
      IgnoreDetailResponsePost = {
      post: {
        globalIgnoreEndDate: null,
        isAnnouncement: false,
        postId: {},
        parentPostId: {},
        topicId: {},
        lastReplyId: {},
        threadDepth: 0,
        category: 0,
        authorMembershipId: 0,
        editorMembershipId: 0,
        subject: [],
        body: [],
        urlLinkOrImage: [],
        metadata: {},
        flags: 0,
        creationDate: null,
        lastModified: null,
        lastReplyDate: null,
        editCount: 0,
        replyCount: 0,
        topicReplyCount: 0,
        ratingCount: 0,
        rating: 0,
        groupOwnerId: 0,
        isGroupPrivate: false,
        actualIsGroupPrivate: false,
        parentGroupId: 0,
        parentTopicId: 0,
        lockedForReplies: false,
        tags: [],
        isTopicBanned: false,
        actualParentPostId: 0,
        level: 0
      },
      displayName: [],
      dateCreated: null,
      dateExpires: null,
      dateModified: null,
      comment: [],
      flags: 0,
      reason: 0
      },
      Post = {
      globalIgnoreEndDate: null,
      isAnnouncement: false,
      postId: {},
      parentPostId: {},
      topicId: {},
      lastReplyId: {},
      threadDepth: 0,
      category: 0,
      authorMembershipId: 0,
      editorMembershipId: 0,
      subject: [],
      body: [],
      urlLinkOrImage: [],
      metadata: {},
      flags: 0,
      creationDate: null,
      lastModified: null,
      lastReplyDate: null,
      editCount: 0,
      replyCount: 0,
      topicReplyCount: 0,
      ratingCount: 0,
      rating: 0,
      groupOwnerId: 0,
      isGroupPrivate: false,
      actualIsGroupPrivate: false,
      parentGroupId: 0,
      parentTopicId: 0,
      lockedForReplies: false,
      tags: [],
      isTopicBanned: false,
      actualParentPostId: 0,
      level: 0
      },
      IgnoreDetailResponseUser = {
      user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: false,
        about: [],
        firstAccess: null,
        lastUpdate: null,
        legacyPortalUID: 0,
        context: {
          isFollowing: false,
          ignoreStatus: {
            isIgnored: false,
            ignoreFlags: 0
          },
          globalIgnoreEndDate: null
        },
        banExpireDate: null,
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: false,
        followerCount: 0,
        globalIgnoreEndDate: null,
        isThemeLight: false,
        adultMode: false,
        locale: [],
        localeInheritDefault: false,
        lastBanReportId: 0,
        showGroupMessaging: false,
        profilePicturePath: [],
        profileThemeName: [],
        userTitleDisplay: []
      },
      displayName: [],
      dateCreated: null,
      dateExpires: null,
      dateModified: null,
      comment: [],
      flags: 0,
      reason: 0
      },
      IgnoreDetailResponse = {
      displayName: [],
      dateCreated: null,
      dateExpires: null,
      dateModified: null,
      comment: [],
      flags: 0,
      reason: 0
      },
      LastReportedItemResponse = {
      membershipId: 0,
      reportId: 0,
      banSourceId: [],
      banSourceType: 0,
      banReason: 0
      },
      LegacyGamePlayer = {
      HaloReach: {
        Gamertag: [],
        GamesPlayed: {},
        ServiceTag: [],
        EmblemUrl: [],
        PlayerModelUrl: [],
        PlayerModelAvatarUrl: [],
        Status: 0
      },
      Halo3Odst: {
        Gamertag: [],
        GamesPlayed: {},
        ServiceTag: [],
        EmblemUrl: [],
        PlayerModelUrl: [],
        PlayerModelAvatarUrl: [],
        Status: 0
      },
      Halo3: {
        Gamertag: [],
        GamesPlayed: {},
        ServiceTag: [],
        EmblemUrl: [],
        PlayerModelUrl: [],
        PlayerModelAvatarUrl: [],
        Status: 0
      },
      Halo2: {
        Gamertag: [],
        GamesPlayed: {},
        ServiceTag: [],
        EmblemUrl: [],
        PlayerModelUrl: [],
        PlayerModelAvatarUrl: [],
        Status: 0
      }
      },
      ReportedItemResponse = {
      moderatedMemberDisplayName: [],
      reportId: 0,
      reportedItem: [],
      reportedItemType: 0,
      dateCreated: null,
      dateResolved: null,
      comment: [],
      result: 0,
      reason: 0,
      moderatorMembershipId: 0,
      dateAssigned: null,
      overturnComment: [],
      resultOverturned: 0,
      dateOverturned: null,
      overturnedMembershipId: 0,
      entity: {},
      reportCount: 0
      },
      SearchResultOfReportedItemResponse = {
      totalResults: 0,
      results: [],
      hasMore: false,
      query: {
        itemsPerPage: 0,
        currentPage: 0
      }
      },
      Bug = {
      bugId: 0,
      bugDescription: [],
      context: [],
      loginName: [],
      userName: [],
      dateCreated: null,
      dateUpdated: null,
      raidId: 0,
      isReviewed: false,
      attachments: []
      },
      BugAttachment = {
      bugAttachmentId: 0,
      bugId: 0,
      name: [],
      fileType: [],
      data: [],
      dateAdded: null
      },
      ClaimResponse = {
      tokenId: 0,
      membershipId: 0,
      membershipType: 0,
      OfferName: [],
      OfferClaimText: []
      },
      OfferHistoryResponse = {
      OfferKey: [],
      OfferDisplayName: [],
      OfferDisplayDetail: [],
      OfferPurchaseDate: null,
      OfferQuantity: 0,
      ConsumableQuantity: 0,
      RedeemType: 0
      },
      TokenThrottleStateResponse = {
      IsThrottled: false,
      ThrottleExpires: null,
      NumberOfFailedAttemptsToday: 0,
      MaximumFailedAttemptsPerDay: 0,
      AgeVerificationState: false
      },
      PlatformMarketplaceCodeResponse = {
      offerKey: [],
      deviceType: 0,
      platformCodeRegion: 0,
      OfferDistributionDate: null,
      platformCode: [],
      OfferDisplayName: [],
      OfferDisplayDetail: []
      },
      DestinyManifest = {
      version: [],
      mobileAssetContentPath: [],
      mobileWorldContentPaths: []
      },
      ServiceResultDestinySingleDefinitionResponse = {
      data: {
        requestedId: {},
        activity: {
          activityHash: {},
          activityName: [],
          activityDescription: [],
          icon: [],
          releaseIcon: [],
          releaseTime: 0,
          activityLevel: 0,
          completionFlagHash: {},
          activityPower: 0,
          minParty: 0,
          maxParty: 0,
          maxPlayers: 0,
          activeRanges: [],
          destinationHash: {},
          placeHash: {},
          activityTypeHash: {},
          tier: 0
        },
        activityType: {
          activityTypeHash: {},
          identifier: [],
          activityTypeName: [],
          activityTypeDescription: [],
          icon: [],
          activeBackgroundVirtualPath: [],
          completedBackgroundVirtualPath: [],
          hiddenOverrideVirtualPath: [],
          tooltipBackgroundVirtualPath: [],
          enlargedActiveBackgroundVirtualPath: [],
          enlargedCompletedBackgroundVirtualPath: [],
          enlargedHiddenOverrideVirtualPath: [],
          enlargedTooltipBackgroundVirtualPath: []
        },
        classDefinition: {
          classHash: {},
          classType: 0,
          className: [],
          classDescription: [],
          classIdentifier: [],
          mentorVendorIdentifier: []
        },
        gender: {
          genderHash: {},
          genderType: 0,
          genderName: [],
          genderDescription: []
        },
        inventoryBucket: {
          bucketHash: {},
          bucketName: [],
          bucketDescription: [],
          scope: 0,
          category: 0,
          bucketOrder: 0,
          bucketIdentifier: [],
          itemCount: 0
        },
        inventoryItem: {
          itemHash: {},
          itemName: [],
          itemDescription: [],
          icon: [],
          secondaryIcon: [],
          displaySource: [],
          actionName: [],
          actionDescription: [],
          tierTypeName: [],
          tierType: 0,
          itemTypeName: [],
          bucketTypeHash: {},
          baseStats: [],
          perkHashes: [],
          itemIdentifier: [],
          specialItemType: 0,
          talentGridHash: {},
          equippingBlock: {
            weaponSandboxPatternIndex: 0,
            gearArtArrangementIndex: 0,
            defaultDyes: [],
            lockedDyes: [],
            customDyes: [],
            customDyeExpression: {},
            weaponPatternHash: {}
          },
          hasGeometry: false,
          statGroupHash: {},
          itemLevels: [],
          qualityLevel: 0
        },
        progression: {
          progressionHash: {},
          name: [],
          scope: 0,
          repeatLastStep: false,
          icon: [],
          identifier: [],
          steps: []
        },
        race: {
          raceHash: {},
          raceType: 0,
          raceName: [],
          raceDescription: []
        },
        stat: {
          statHash: {},
          statName: [],
          statDescription: [],
          icon: [],
          statIdentifier: []
        },
        talentGrid: {
          gridHash: {},
          maxGridLevel: 0,
          gridLevelPerColumn: 0,
          progressionHash: {},
          nodes: []
        },
        statGroup: {
          statGroupHash: {},
          maximumValue: 0,
          uiPosition: 0,
          scaledStats: []
        },
        unlockFlag: {
          flagHash: {},
          name: [],
          displayName: [],
          displayDescription: [],
          calendarEvents: [],
          dateRanges: []
        },
        vendor: {
          summary: {
            vendorHash: {},
            vendorName: [],
            vendorDescription: [],
            vendorIcon: [],
            factionName: [],
            factionHash: {},
            factionDescription: [],
            resetIntervalMinutes: 0,
            resetOffsetMinutes: 0,
            vendorIdentifier: [],
            positionX: 0,
            positionY: 0,
            transitionNodeIdentifier: [],
            visible: false,
            progressionHash: {},
            sellString: [],
            buyString: [],
            vendorPortrait: [],
            vendorBanner: [],
            unlockFlagHashes: [],
            enabledUnlockFlagHashes: [],
            mapSectionIdentifier: [],
            mapSectionName: []
          },
          sales: [],
          acceptedItems: [],
          categories: [],
          unlockRanges: []
        },
        destination: {
          destinationHash: {},
          destinationName: [],
          destinationDescription: [],
          icon: [],
          placeHash: {},
          destinationIdentifier: []
        },
        place: {
          placeHash: {},
          placeName: [],
          placeDescription: [],
          icon: []
        },
        directorBook: {
          bookHash: {},
          bookName: [],
          bookDescription: [],
          bookNumber: [],
          nodes: [],
          connections: [],
          bookIdentifier: [],
          visible: false,
          isOverview: false,
          transitionNodes: [],
          notificationNodes: [],
          urlFriendlyName: [],
          imagePaths: [],
          isDefaultExpression: {},
          isVisibleExpression: {},
          destinationHash: {},
          tileMap: {
            tileImages: [],
            numColumns: 0,
            numRows: 0,
            tileWidth: 0,
            tileHeight: 0
          }
        },
        materialRequirementSet: {
          setHash: {},
          materials: []
        },
        sandboxPerk: {
          perkHash: {},
          displayName: [],
          displayDescription: [],
          displayIcon: [],
          perkIdentifier: []
        },
        artDye: {
          artDyeHash: {},
          artDyeName: [],
          index: 0,
          dyeManifestHash: {},
          dyeManifestName: []
        },
        artDyeChannel: {
          channelHash: {},
          index: 0,
          channelName: []
        },
        activityBundle: {
          bundleHash: {},
          activityName: [],
          activityDescription: [],
          icon: [],
          releaseIcon: [],
          releaseTime: 0,
          destinationHash: {},
          placeHash: {},
          activityTypeHash: {},
          activityHashes: []
        },
        gearAsset: {
          GearAssets: [],
          content: []
        }
      },
      definitions: {
        destinations: [],
        places: [],
        activityTypes: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        progressions: [],
        materialRequirements: [],
        items: [],
        sandboxPatterns: [],
        stats: [],
        activityBundles: [],
        books: []
      }
      },
      DestinySingleDefinitionResponse = {
      requestedId: {},
      activity: {
        activityHash: {},
        activityName: [],
        activityDescription: [],
        icon: [],
        releaseIcon: [],
        releaseTime: 0,
        activityLevel: 0,
        completionFlagHash: {},
        activityPower: 0,
        minParty: 0,
        maxParty: 0,
        maxPlayers: 0,
        activeRanges: [],
        destinationHash: {},
        placeHash: {},
        activityTypeHash: {},
        tier: 0
      },
      activityType: {
        activityTypeHash: {},
        identifier: [],
        activityTypeName: [],
        activityTypeDescription: [],
        icon: [],
        activeBackgroundVirtualPath: [],
        completedBackgroundVirtualPath: [],
        hiddenOverrideVirtualPath: [],
        tooltipBackgroundVirtualPath: [],
        enlargedActiveBackgroundVirtualPath: [],
        enlargedCompletedBackgroundVirtualPath: [],
        enlargedHiddenOverrideVirtualPath: [],
        enlargedTooltipBackgroundVirtualPath: []
      },
      classDefinition: {
        classHash: {},
        classType: 0,
        className: [],
        classDescription: [],
        classIdentifier: [],
        mentorVendorIdentifier: []
      },
      gender: {
        genderHash: {},
        genderType: 0,
        genderName: [],
        genderDescription: []
      },
      inventoryBucket: {
        bucketHash: {},
        bucketName: [],
        bucketDescription: [],
        scope: 0,
        category: 0,
        bucketOrder: 0,
        bucketIdentifier: [],
        itemCount: 0
      },
      inventoryItem: {
        itemHash: {},
        itemName: [],
        itemDescription: [],
        icon: [],
        secondaryIcon: [],
        displaySource: [],
        actionName: [],
        actionDescription: [],
        tierTypeName: [],
        tierType: 0,
        itemTypeName: [],
        bucketTypeHash: {},
        baseStats: [],
        perkHashes: [],
        itemIdentifier: [],
        specialItemType: 0,
        talentGridHash: {},
        equippingBlock: {
          weaponSandboxPatternIndex: 0,
          gearArtArrangementIndex: 0,
          defaultDyes: [],
          lockedDyes: [],
          customDyes: [],
          customDyeExpression: {},
          weaponPatternHash: {}
        },
        hasGeometry: false,
        statGroupHash: {},
        itemLevels: [],
        qualityLevel: 0
      },
      progression: {
        progressionHash: {},
        name: [],
        scope: 0,
        repeatLastStep: false,
        icon: [],
        identifier: [],
        steps: []
      },
      race: {
        raceHash: {},
        raceType: 0,
        raceName: [],
        raceDescription: []
      },
      stat: {
        statHash: {},
        statName: [],
        statDescription: [],
        icon: [],
        statIdentifier: []
      },
      talentGrid: {
        gridHash: {},
        maxGridLevel: 0,
        gridLevelPerColumn: 0,
        progressionHash: {},
        nodes: []
      },
      statGroup: {
        statGroupHash: {},
        maximumValue: 0,
        uiPosition: 0,
        scaledStats: []
      },
      unlockFlag: {
        flagHash: {},
        name: [],
        displayName: [],
        displayDescription: [],
        calendarEvents: [],
        dateRanges: []
      },
      vendor: {
        summary: {
          vendorHash: {},
          vendorName: [],
          vendorDescription: [],
          vendorIcon: [],
          factionName: [],
          factionHash: {},
          factionDescription: [],
          resetIntervalMinutes: 0,
          resetOffsetMinutes: 0,
          vendorIdentifier: [],
          positionX: 0,
          positionY: 0,
          transitionNodeIdentifier: [],
          visible: false,
          progressionHash: {},
          sellString: [],
          buyString: [],
          vendorPortrait: [],
          vendorBanner: [],
          unlockFlagHashes: [],
          enabledUnlockFlagHashes: [],
          mapSectionIdentifier: [],
          mapSectionName: []
        },
        sales: [],
        acceptedItems: [],
        categories: [],
        unlockRanges: []
      },
      destination: {
        destinationHash: {},
        destinationName: [],
        destinationDescription: [],
        icon: [],
        placeHash: {},
        destinationIdentifier: []
      },
      place: {
        placeHash: {},
        placeName: [],
        placeDescription: [],
        icon: []
      },
      directorBook: {
        bookHash: {},
        bookName: [],
        bookDescription: [],
        bookNumber: [],
        nodes: [],
        connections: [],
        bookIdentifier: [],
        visible: false,
        isOverview: false,
        transitionNodes: [],
        notificationNodes: [],
        urlFriendlyName: [],
        imagePaths: [],
        isDefaultExpression: {},
        isVisibleExpression: {},
        destinationHash: {},
        tileMap: {
          tileImages: [],
          numColumns: 0,
          numRows: 0,
          tileWidth: 0,
          tileHeight: 0
        }
      },
      materialRequirementSet: {
        setHash: {},
        materials: []
      },
      sandboxPerk: {
        perkHash: {},
        displayName: [],
        displayDescription: [],
        displayIcon: [],
        perkIdentifier: []
      },
      artDye: {
        artDyeHash: {},
        artDyeName: [],
        index: 0,
        dyeManifestHash: {},
        dyeManifestName: []
      },
      artDyeChannel: {
        channelHash: {},
        index: 0,
        channelName: []
      },
      activityBundle: {
        bundleHash: {},
        activityName: [],
        activityDescription: [],
        icon: [],
        releaseIcon: [],
        releaseTime: 0,
        destinationHash: {},
        placeHash: {},
        activityTypeHash: {},
        activityHashes: []
      },
      gearAsset: {
        GearAssets: [],
        content: []
      }
      },
      DestinyActivityDefinition = {
      activityHash: {},
      activityName: [],
      activityDescription: [],
      icon: [],
      releaseIcon: [],
      releaseTime: 0,
      activityLevel: 0,
      completionFlagHash: {},
      activityPower: 0,
      minParty: 0,
      maxParty: 0,
      maxPlayers: 0,
      activeRanges: [],
      destinationHash: {},
      placeHash: {},
      activityTypeHash: {},
      tier: 0
      },
      DateRange = {
      start: null,
      end: null
      },
      DestinyActivityTypeDefinition = {
      activityTypeHash: {},
      identifier: [],
      activityTypeName: [],
      activityTypeDescription: [],
      icon: [],
      activeBackgroundVirtualPath: [],
      completedBackgroundVirtualPath: [],
      hiddenOverrideVirtualPath: [],
      tooltipBackgroundVirtualPath: [],
      enlargedActiveBackgroundVirtualPath: [],
      enlargedCompletedBackgroundVirtualPath: [],
      enlargedHiddenOverrideVirtualPath: [],
      enlargedTooltipBackgroundVirtualPath: []
      },
      DestinyInventoryBucketDefinition = {
      bucketHash: {},
      bucketName: [],
      bucketDescription: [],
      scope: 0,
      category: 0,
      bucketOrder: 0,
      bucketIdentifier: [],
      itemCount: 0
      },
      DestinyInventoryItemDefinition = {
      itemHash: {},
      itemName: [],
      itemDescription: [],
      icon: [],
      secondaryIcon: [],
      displaySource: [],
      actionName: [],
      actionDescription: [],
      tierTypeName: [],
      tierType: 0,
      itemTypeName: [],
      bucketTypeHash: {},
      baseStats: [],
      perkHashes: [],
      itemIdentifier: [],
      specialItemType: 0,
      talentGridHash: {},
      equippingBlock: {
        weaponSandboxPatternIndex: 0,
        gearArtArrangementIndex: 0,
        defaultDyes: [],
        lockedDyes: [],
        customDyes: [],
        customDyeExpression: {},
        weaponPatternHash: {}
      },
      hasGeometry: false,
      statGroupHash: {},
      itemLevels: [],
      qualityLevel: 0
      },
      DestinyEquippingBlockDefinition = {
      weaponSandboxPatternIndex: 0,
      gearArtArrangementIndex: 0,
      defaultDyes: [],
      lockedDyes: [],
      customDyes: [],
      customDyeExpression: {},
      weaponPatternHash: {}
      },
      DyeReference = {
      channelHash: {},
      dyeHash: {}
      },
      DestinyInventoryItemStatDefinition = {
      statHash: {},
      value: 0
      },
      DestinyProgressionDefinition = {
      progressionHash: {},
      name: [],
      scope: 0,
      repeatLastStep: false,
      icon: [],
      identifier: [],
      steps: []
      },
      DestinyProgressionStepDefinition = {
      stepName: [],
      progressTotal: 0
      },
      DestinyStatDefinition = {
      statHash: {},
      statName: [],
      statDescription: [],
      icon: [],
      statIdentifier: []
      },
      DestinyTalentGridDefinition = {
      gridHash: {},
      maxGridLevel: 0,
      gridLevelPerColumn: 0,
      progressionHash: {},
      nodes: []
      },
      DestinyTalentNodeDefinition = {
      nodeHash: {},
      row: 0,
      column: 0,
      prerequisiteNodeIndexes: [],
      binaryPairNodeIndex: 0,
      autoUnlocks: false,
      lastStepRepeats: false,
      isRandom: false,
      randomActivationRequirement: {
        gridLevel: 0,
        materialRequirementHashes: []
      },
      isRandomRepurchasable: false,
      steps: [],
      exlusiveWithNodes: [],
      randomStartProgressionBarAtProgression: 0
      },
      DestinyNodeActivationRequirement = {
      gridLevel: 0,
      materialRequirementHashes: []
      },
      DestinyNodeStepDefinition = {
      nodeStepName: [],
      nodeStepDescription: [],
      interactionDescription: [],
      icon: [],
      damageType: 0,
      activationRequirement: {
        gridLevel: 0,
        materialRequirementHashes: []
      },
      canActivateNextStep: false,
      nextStepIndex: 0,
      isNextStepRandom: false,
      perkHashes: [],
      startProgressionBarAtProgress: 0
      },
      DestinyStatGroupDefinition = {
      statGroupHash: {},
      maximumValue: 0,
      uiPosition: 0,
      scaledStats: []
      },
      DestinyStatDisplayDefinition = {
      statHash: {},
      maximumValue: 0,
      displayAsNumeric: false,
      displayInterpolation: []
      },
      InterpolationPoint = {
      value: 0,
      weight: 0
      },
      DestinyUnlockFlagDefinition = {
      flagHash: {},
      name: [],
      displayName: [],
      displayDescription: [],
      calendarEvents: [],
      dateRanges: []
      },
      DestinyCalendarEventDefinition = {
      eventDate: null,
      unlockState: 0
      },
      DestinyVendorDefinition = {
      summary: {
        vendorHash: {},
        vendorName: [],
        vendorDescription: [],
        vendorIcon: [],
        factionName: [],
        factionHash: {},
        factionDescription: [],
        resetIntervalMinutes: 0,
        resetOffsetMinutes: 0,
        vendorIdentifier: [],
        positionX: 0,
        positionY: 0,
        transitionNodeIdentifier: [],
        visible: false,
        progressionHash: {},
        sellString: [],
        buyString: [],
        vendorPortrait: [],
        vendorBanner: [],
        unlockFlagHashes: [],
        enabledUnlockFlagHashes: [],
        mapSectionIdentifier: [],
        mapSectionName: []
      },
      sales: [],
      acceptedItems: [],
      categories: [],
      unlockRanges: []
      },
      DestinyVendorSummaryDefinition = {
      vendorHash: {},
      vendorName: [],
      vendorDescription: [],
      vendorIcon: [],
      factionName: [],
      factionHash: {},
      factionDescription: [],
      resetIntervalMinutes: 0,
      resetOffsetMinutes: 0,
      vendorIdentifier: [],
      positionX: 0,
      positionY: 0,
      transitionNodeIdentifier: [],
      visible: false,
      progressionHash: {},
      sellString: [],
      buyString: [],
      vendorPortrait: [],
      vendorBanner: [],
      unlockFlagHashes: [],
      enabledUnlockFlagHashes: [],
      mapSectionIdentifier: [],
      mapSectionName: []
      },
      DestinyVendorItemSummaryDefinition = {
      price: 0,
      priceOverride: false,
      itemHash: {},
      currencyHash: {},
      bucketHash: {},
      hasCurrency: false,
      categoryHash: {},
      categoryTitle: []
      },
      DestinyVendorAcceptedItemDefinition = {
      acceptedBucket: {},
      destinationBucket: {}
      },
      DestinyVendorCategoryDefinition = {
      categoryHash: {},
      displayTitle: [],
      overlayCurrencyItemHash: {},
      quantityAvailable: 0,
      showUnavailableItems: false,
      hideIfNoCurrency: false,
      buyStringOverride: [],
      disabledDescription: [],
      overlayTitle: [],
      overlayDescription: [],
      overlayChoice: [],
      overlayIcon: [],
      hasOverlay: false
      },
      DestinyDestinationDefinition = {
      destinationHash: {},
      destinationName: [],
      destinationDescription: [],
      icon: [],
      placeHash: {},
      destinationIdentifier: []
      },
      DestinyPlaceDefinition = {
      placeHash: {},
      placeName: [],
      placeDescription: [],
      icon: []
      },
      DestinyDirectorBookDefinition = {
      bookHash: {},
      bookName: [],
      bookDescription: [],
      bookNumber: [],
      nodes: [],
      connections: [],
      bookIdentifier: [],
      visible: false,
      isOverview: false,
      transitionNodes: [],
      notificationNodes: [],
      urlFriendlyName: [],
      imagePaths: [],
      isDefaultExpression: {},
      isVisibleExpression: {},
      destinationHash: {},
      tileMap: {
        tileImages: [],
        numColumns: 0,
        numRows: 0,
        tileWidth: 0,
        tileHeight: 0
      }
      },
      TileMap = {
      tileImages: [],
      numColumns: 0,
      numRows: 0,
      tileWidth: 0,
      tileHeight: 0
      },
      DestinyDirectorNodeDefinition = {
      nodeDefinitionHash: {},
      styleHash: {},
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      displayLabel: [],
      overrideDisplayDescription: [],
      overrideDisplayIcon: [],
      overrideDisplayName: [],
      activityBundleHashes: [],
      states: [],
      uiModifier: 0
      },
      DestinyDirectorNodeStateDefinition = {
      state: 0,
      expression: {}
      },
      DestinyDirectorConnectionDefinition = {
      sourceNodeIndex: 0,
      destinationNodeIndex: 0
      },
      DestinyDirectorTransitionNodeDefinition = {
      identifier: [],
      positionX: 0,
      positionY: 0,
      transitionBookHash: {},
      transitionType: 0,
      width: 0,
      height: 0,
      parallaxIndex: 0,
      imagePath: [],
      alphaImagePath: [],
      destinationBackgroundImagePath: [],
      destinationDetailImagePath: [],
      destinationContextImagePath: [],
      label: [],
      tileMap: {
        tileImages: [],
        numColumns: 0,
        numRows: 0,
        tileWidth: 0,
        tileHeight: 0
      }
      },
      DestinyDirectorNotificationNodeDefinition = {
      identifier: [],
      transitionNodeIdentifier: [],
      positionX: 0,
      positionY: 0,
      width: 0,
      height: 0,
      backgroundImagePath: [],
      showCount: false,
      activityBundleHashes: [],
      vendorHashes: []
      },
      DestinyMaterialRequirementSetDefinition = {
      setHash: {},
      materials: []
      },
      DestinyMaterialRequirement = {
      itemHash: {},
      deleteOnAction: false,
      count: 0
      },
      DestinySandboxPerkDefinition = {
      perkHash: {},
      displayName: [],
      displayDescription: [],
      displayIcon: [],
      perkIdentifier: []
      },
      DestinyArtDyeReferenceDefinition = {
      artDyeHash: {},
      artDyeName: [],
      index: 0,
      dyeManifestHash: {},
      dyeManifestName: []
      },
      DestinyArtDyeChannelDefinition = {
      channelHash: {},
      index: 0,
      channelName: []
      },
      DestinyActivityBundleDefinition = {
      bundleHash: {},
      activityName: [],
      activityDescription: [],
      icon: [],
      releaseIcon: [],
      releaseTime: 0,
      destinationHash: {},
      placeHash: {},
      activityTypeHash: {},
      activityHashes: []
      },
      DestinyGearAssetsDefinition = {
      GearAssets: [],
      content: []
      },
      DestinyGearPlatformContent = {
      platform: [],
      GeometryAssets: [],
      TextureAssets: [],
      PlateRegions: [],
      MaleIndexSet: {
        textures: [],
        geometry: [],
        plate_regions: []
      },
      DyeIndexSet: {
        textures: [],
        geometry: [],
        plate_regions: []
      },
      FemaleIndexSet: {
        textures: [],
        geometry: [],
        plate_regions: []
      },
      RegionIndexSets: []
      },
      DestinyGearAssetsIndexSet = {
      textures: [],
      geometry: [],
      plate_regions: []
      },
      DefinitionSetDestinySingleDefinitionResponse = {
      destinations: [],
      places: [],
      activityTypes: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      progressions: [],
      materialRequirements: [],
      items: [],
      sandboxPatterns: [],
      stats: [],
      activityBundles: [],
      books: []
      },
      DestinySandboxPatternDefinition = {
      patternHash: {},
      patternName: [],
      patternGlobalTagIdHash: {},
      weaponContentGroupHash: {},
      weaponTranslationGroupHash: {},
      filters: []
      },
      DestinyArrangementRegionFilterDefinition = {
      artArrangementRegionIndex: 0,
      statHash: {},
      arrangementIndexByStatValue: []
      },
      ServiceResultDestinyAccount = {
      data: {
        membershipId: 0,
        membershipType: 0,
        characters: [],
        clanName: [],
        clanTag: [],
        inventory: {
          buckets: [],
          currencies: []
        },
        grimoireScore: 0
      },
      definitions: {
        races: [],
        genders: [],
        classes: [],
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        stats: [],
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        progressions: [],
        materialRequirements: [],
        flags: []
      }
      },
      DestinyAccount = {
      membershipId: 0,
      membershipType: 0,
      characters: [],
      clanName: [],
      clanTag: [],
      inventory: {
        buckets: [],
        currencies: []
      },
      grimoireScore: 0
      },
      DestinyInventory = {
      buckets: [],
      currencies: []
      },
      DestinyItemQuantity = {
      itemHash: {},
      value: 0
      },
      DestinyInventoryBucket = {
      items: [],
      bucketHash: {}
      },
      DestinyInventoryItem = {
      itemHash: {},
      bindStatus: 0,
      isEquipped: false,
      itemInstanceId: 0,
      itemLevel: 0,
      stackSize: 0,
      qualityLevel: 0,
      stats: [],
      primaryStat: {
        statHash: {},
        value: 0,
        maximumValue: 0
      },
      canEquip: false,
      equipRequiredLevel: 0,
      unlockFlagHashRequiredToEquip: {},
      cannotEquipReason: 0,
      damageType: 0,
      damageTypeNodeIndex: 0,
      damageTypeStepIndex: 0,
      progression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
      },
      talentGridHash: {},
      nodes: [],
      useCustomDyes: false,
      artRegions: []
      },
      DestinyStat = {
      statHash: {},
      value: 0,
      maximumValue: 0
      },
      DestinyTalentNodeSummary = {
      isActivated: false,
      stepIndex: 0
      },
      DestinyCharacterSummary = {
      characterBase: {
        membershipId: 0,
        membershipType: 0,
        characterId: 0,
        dateLastPlayed: null,
        minutesPlayedThisSession: 0,
        minutesPlayedTotal: 0,
        powerLevel: 0,
        raceHash: {},
        genderHash: {},
        classHash: {},
        currentActivityHash: {},
        lastCompletedStoryHash: {},
        stats: [],
        customization: {
          personality: {},
          face: {},
          skinColor: {},
          lipColor: {},
          eyeColor: {},
          hairColor: {},
          featureColor: {},
          decalColor: {},
          wearHelmet: false,
          hairIndex: 0,
          featureIndex: 0,
          decalIndex: 0
        },
        grimoireScore: {},
        peerView: {
          equipment: []
        }
      },
      levelProgression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
      },
      emblemPath: [],
      backgroundPath: [],
      emblemHash: {},
      characterLevel: 0
      },
      DestinyCharacterBase = {
      membershipId: 0,
      membershipType: 0,
      characterId: 0,
      dateLastPlayed: null,
      minutesPlayedThisSession: 0,
      minutesPlayedTotal: 0,
      powerLevel: 0,
      raceHash: {},
      genderHash: {},
      classHash: {},
      currentActivityHash: {},
      lastCompletedStoryHash: {},
      stats: [],
      customization: {
        personality: {},
        face: {},
        skinColor: {},
        lipColor: {},
        eyeColor: {},
        hairColor: {},
        featureColor: {},
        decalColor: {},
        wearHelmet: false,
        hairIndex: 0,
        featureIndex: 0,
        decalIndex: 0
      },
      grimoireScore: {},
      peerView: {
        equipment: []
      }
      },
      DestinyCharacterCustomization = {
      personality: {},
      face: {},
      skinColor: {},
      lipColor: {},
      eyeColor: {},
      hairColor: {},
      featureColor: {},
      decalColor: {},
      wearHelmet: false,
      hairIndex: 0,
      featureIndex: 0,
      decalIndex: 0
      },
      DestinyCharacterPeerView = {
      equipment: []
      },
      DestinyItemPeerView = {
      itemHash: {},
      dyes: []
      },
      DefinitionSetDestinyAccount = {
      races: [],
      genders: [],
      classes: [],
      activities: [],
      destinations: [],
      places: [],
      activityTypes: [],
      stats: [],
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      progressions: [],
      materialRequirements: [],
      flags: []
      },
      ServiceResultDestinyCharacterSummary = {
      data: {
        characterBase: {
          membershipId: 0,
          membershipType: 0,
          characterId: 0,
          dateLastPlayed: null,
          minutesPlayedThisSession: 0,
          minutesPlayedTotal: 0,
          powerLevel: 0,
          raceHash: {},
          genderHash: {},
          classHash: {},
          currentActivityHash: {},
          lastCompletedStoryHash: {},
          stats: [],
          customization: {
            personality: {},
            face: {},
            skinColor: {},
            lipColor: {},
            eyeColor: {},
            hairColor: {},
            featureColor: {},
            decalColor: {},
            wearHelmet: false,
            hairIndex: 0,
            featureIndex: 0,
            decalIndex: 0
          },
          grimoireScore: {},
          peerView: {
            equipment: []
          }
        },
        levelProgression: {
          dailyProgress: 0,
          weeklyProgress: 0,
          currentProgress: 0,
          level: 0,
          step: 0,
          progressToNextLevel: 0,
          nextLevelAt: 0,
          progressionHash: {}
        },
        emblemPath: [],
        backgroundPath: [],
        emblemHash: {},
        characterLevel: 0
      },
      definitions: {
        races: [],
        genders: [],
        classes: [],
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        stats: [],
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        progressions: [],
        materialRequirements: []
      }
      },
      DefinitionSetDestinyCharacterSummary = {
      races: [],
      genders: [],
      classes: [],
      activities: [],
      destinations: [],
      places: [],
      activityTypes: [],
      stats: [],
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      progressions: [],
      materialRequirements: []
      },
      ServiceResultDestinyCharacter = {
      data: {
        characterBase: {
          membershipId: 0,
          membershipType: 0,
          characterId: 0,
          dateLastPlayed: null,
          minutesPlayedThisSession: 0,
          minutesPlayedTotal: 0,
          powerLevel: 0,
          raceHash: {},
          genderHash: {},
          classHash: {},
          currentActivityHash: {},
          lastCompletedStoryHash: {},
          stats: [],
          customization: {
            personality: {},
            face: {},
            skinColor: {},
            lipColor: {},
            eyeColor: {},
            hairColor: {},
            featureColor: {},
            decalColor: {},
            wearHelmet: false,
            hairIndex: 0,
            featureIndex: 0,
            decalIndex: 0
          },
          grimoireScore: {},
          peerView: {
            equipment: []
          }
        },
        activities: {
          dateActivityStarted: null,
          available: []
        },
        directorNodeStates: [],
        visibleBookHashes: [],
        defaultBookHash: {},
        inventory: {
          buckets: [],
          currencies: []
        },
        progressions: {
          progressions: [],
          levelProgression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
          },
          factionProgressionHash: {}
        },
        customDyes: [],
        characterLevel: 0
      },
      definitions: {
        books: [],
        destinations: [],
        activityBundles: [],
        places: [],
        activityTypes: [],
        races: [],
        genders: [],
        classes: [],
        activities: [],
        stats: [],
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        progressions: [],
        materialRequirements: [],
        flags: []
      }
      },
      DestinyCharacter = {
      characterBase: {
        membershipId: 0,
        membershipType: 0,
        characterId: 0,
        dateLastPlayed: null,
        minutesPlayedThisSession: 0,
        minutesPlayedTotal: 0,
        powerLevel: 0,
        raceHash: {},
        genderHash: {},
        classHash: {},
        currentActivityHash: {},
        lastCompletedStoryHash: {},
        stats: [],
        customization: {
          personality: {},
          face: {},
          skinColor: {},
          lipColor: {},
          eyeColor: {},
          hairColor: {},
          featureColor: {},
          decalColor: {},
          wearHelmet: false,
          hairIndex: 0,
          featureIndex: 0,
          decalIndex: 0
        },
        grimoireScore: {},
        peerView: {
          equipment: []
        }
      },
      activities: {
        dateActivityStarted: null,
        available: []
      },
      directorNodeStates: [],
      visibleBookHashes: [],
      defaultBookHash: {},
      inventory: {
        buckets: [],
        currencies: []
      },
      progressions: {
        progressions: [],
        levelProgression: {
          dailyProgress: 0,
          weeklyProgress: 0,
          currentProgress: 0,
          level: 0,
          step: 0,
          progressToNextLevel: 0,
          nextLevelAt: 0,
          progressionHash: {}
        },
        factionProgressionHash: {}
      },
      customDyes: [],
      characterLevel: 0
      },
      DestinyCharacterActivities = {
      dateActivityStarted: null,
      available: []
      },
      DestinyActivity = {
      activityHash: {},
      isNew: false,
      canLead: false,
      canJoin: false,
      isCompleted: false,
      isVisible: false
      },
      DestinyCharacterProgressions = {
      progressions: [],
      levelProgression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
      },
      factionProgressionHash: {}
      },
      DefinitionSetDestinyCharacter = {
      books: [],
      destinations: [],
      activityBundles: [],
      places: [],
      activityTypes: [],
      races: [],
      genders: [],
      classes: [],
      activities: [],
      stats: [],
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      progressions: [],
      materialRequirements: [],
      flags: []
      },
      ServiceResultDestinyInventory = {
      data: {
        buckets: [],
        currencies: []
      },
      definitions: {
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        stats: [],
        progressions: [],
        materialRequirements: [],
        flags: []
      }
      },
      DefinitionSetDestinyInventory = {
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      stats: [],
      progressions: [],
      materialRequirements: [],
      flags: []
      },
      ServiceResultDestinyInventoryItemDetail = {
      data: {
        item: {
          itemHash: {},
          bindStatus: 0,
          isEquipped: false,
          itemInstanceId: 0,
          itemLevel: 0,
          stackSize: 0,
          qualityLevel: 0,
          stats: [],
          primaryStat: {
            statHash: {},
            value: 0,
            maximumValue: 0
          },
          canEquip: false,
          equipRequiredLevel: 0,
          unlockFlagHashRequiredToEquip: {},
          cannotEquipReason: 0,
          damageType: 0,
          damageTypeNodeIndex: 0,
          damageTypeStepIndex: 0,
          progression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
          },
          talentGridHash: {},
          nodes: [],
          useCustomDyes: false,
          artRegions: []
        },
        talentNodes: [],
        statsOnNodes: [],
        characterStatsToDisplay: []
      },
      definitions: {
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        stats: [],
        progressions: [],
        materialRequirements: [],
        flags: []
      }
      },
      DestinyInventoryItemDetail = {
      item: {
        itemHash: {},
        bindStatus: 0,
        isEquipped: false,
        itemInstanceId: 0,
        itemLevel: 0,
        stackSize: 0,
        qualityLevel: 0,
        stats: [],
        primaryStat: {
          statHash: {},
          value: 0,
          maximumValue: 0
        },
        canEquip: false,
        equipRequiredLevel: 0,
        unlockFlagHashRequiredToEquip: {},
        cannotEquipReason: 0,
        damageType: 0,
        damageTypeNodeIndex: 0,
        damageTypeStepIndex: 0,
        progression: {
          dailyProgress: 0,
          weeklyProgress: 0,
          currentProgress: 0,
          level: 0,
          step: 0,
          progressToNextLevel: 0,
          nextLevelAt: 0,
          progressionHash: {}
        },
        talentGridHash: {},
        nodes: [],
        useCustomDyes: false,
        artRegions: []
      },
      talentNodes: [],
      statsOnNodes: [],
      characterStatsToDisplay: []
      },
      DestinyTalentNode = {
      nodeIndex: 0,
      nodeHash: {},
      state: 0,
      stateId: [],
      isActivated: false,
      stepIndex: 0,
      materialsToUpgrade: [],
      activationGridLevel: 0,
      progressPercent: {}
      },
      DestinyTalentNodeStat = {
      currentNodeStats: [],
      nextNodeStats: []
      },
      DefinitionSetDestinyInventoryItemDetail = {
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      stats: [],
      progressions: [],
      materialRequirements: [],
      flags: []
      },
      ServiceResultDestinyCharacterActivities = {
      data: {
        dateActivityStarted: null,
        available: []
      },
      definitions: {
        activities: [],
        destinations: [],
        places: [],
        activityTypes: []
      }
      },
      DefinitionSetDestinyCharacterActivities = {
      activities: [],
      destinations: [],
      places: [],
      activityTypes: []
      },
      ServiceResultDestinyCharacterProgressions = {
      data: {
        progressions: [],
        levelProgression: {
          dailyProgress: 0,
          weeklyProgress: 0,
          currentProgress: 0,
          level: 0,
          step: 0,
          progressToNextLevel: 0,
          nextLevelAt: 0,
          progressionHash: {}
        },
        factionProgressionHash: {}
      },
      definitions: {
        progressions: []
      }
      },
      DefinitionSetDestinyCharacterProgressions = {
      progressions: []
      },
      ServiceResultDestinyCharacterVendors = {
      data: {
        vendors: []
      },
      definitions: {
        vendorDetails: [],
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        stats: [],
        progressions: [],
        materialRequirements: [],
        flags: []
      }
      },
      DestinyCharacterVendors = {
      vendors: []
      },
      DestinyCharacterVendor = {
      vendorHash: {},
      ackState: {
        needsAck: false,
        ackId: []
      },
      nextRefreshDate: null,
      enabled: false,
      saleItemCategories: [],
      inventoryBuckets: [],
      progression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
      }
      },
      AckState = {
      needsAck: false,
      ackId: []
      },
      DestinyVendorCategorySaleItems = {
      categoryTitle: [],
      saleItems: []
      },
      DestinyVendorSaleItem = {
      vendorItemIndex: 0,
      item: {
        itemHash: {},
        bindStatus: 0,
        isEquipped: false,
        itemInstanceId: 0,
        itemLevel: 0,
        stackSize: 0,
        qualityLevel: 0,
        stats: [],
        primaryStat: {
          statHash: {},
          value: 0,
          maximumValue: 0
        },
        canEquip: false,
        equipRequiredLevel: 0,
        unlockFlagHashRequiredToEquip: {},
        cannotEquipReason: 0,
        damageType: 0,
        damageTypeNodeIndex: 0,
        damageTypeStepIndex: 0,
        progression: {
          dailyProgress: 0,
          weeklyProgress: 0,
          currentProgress: 0,
          level: 0,
          step: 0,
          progressToNextLevel: 0,
          nextLevelAt: 0,
          progressionHash: {}
        },
        talentGridHash: {},
        nodes: [],
        useCustomDyes: false,
        artRegions: []
      },
      itemStatus: 0,
      costs: [],
      requiredUnlockFlags: []
      },
      DefinitionSetDestinyCharacterVendors = {
      vendorDetails: [],
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      stats: [],
      progressions: [],
      materialRequirements: [],
      flags: []
      },
      ServiceResultDestinyCharacterVendorSummaries = {
      data: {
        vendors: []
      },
      definitions: {
        vendorDetails: [],
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        stats: [],
        progressions: [],
        materialRequirements: []
      }
      },
      DestinyCharacterVendorSummaries = {
      vendors: []
      },
      DestinyCharacterVendorSummary = {
      vendorHash: {},
      ackState: {
        needsAck: false,
        ackId: []
      },
      nextRefreshDate: null,
      enabled: false
      },
      DefinitionSetDestinyCharacterVendorSummaries = {
      vendorDetails: [],
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      stats: [],
      progressions: [],
      materialRequirements: []
      },
      ServiceResultDestinyCharacterVendor = {
      data: {
        vendorHash: {},
        ackState: {
          needsAck: false,
          ackId: []
        },
        nextRefreshDate: null,
        enabled: false,
        saleItemCategories: [],
        inventoryBuckets: [],
        progression: {
          dailyProgress: 0,
          weeklyProgress: 0,
          currentProgress: 0,
          level: 0,
          step: 0,
          progressToNextLevel: 0,
          nextLevelAt: 0,
          progressionHash: {}
        }
      },
      definitions: {
        vendorDetails: [],
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        stats: [],
        progressions: [],
        materialRequirements: [],
        flags: []
      }
      },
      DefinitionSetDestinyCharacterVendor = {
      vendorDetails: [],
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      stats: [],
      progressions: [],
      materialRequirements: [],
      flags: []
      },
      ServiceResultDestinyAdvisorData = {
      data: {
        vendorAdvisors: [],
        activityAdvisors: [],
        areOffersAvailable: false,
        events: []
      },
      definitions: {
        vendorDetails: [],
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        stats: [],
        progressions: [],
        materialRequirements: [],
        activityBundles: [],
        destinations: [],
        places: [],
        activityTypes: [],
        flags: [],
        activities: []
      }
      },
      DestinyAdvisorData = {
      vendorAdvisors: [],
      activityAdvisors: [],
      areOffersAvailable: false,
      events: []
      },
      DestinyAdvisorSpecialEvent = {
      eventIdentifier: [],
      expirationDate: null
      },
      DestinyVendorAdvisorData = {
      specialCurrencySales: [],
      rotationAckId: [],
      needsAck: false,
      nextRefreshDate: null,
      pendingBounties: {
        saleItems: []
      },
      rewardClaimSales: []
      },
      DestinyAdvisorVendorSales = {
      saleItems: []
      },
      DestinyAdvisorVendorSalesByCurrency = {
      currencyItemHash: {},
      saleItems: []
      },
      DestinyActivityAdvisorData = {
      activityBundleHash: {},
      materialUpgrades: {
        activityBundleHash: {},
        materialItemHash: {},
        itemSoidsUpgradable: []
      },
      raidActivities: {
        activityBundleHash: {},
        raidIdentifier: [],
        expirationDate: null,
        tiers: []
      },
      nightfallActivities: {
        activityBundleHash: {},
        expirationDate: null,
        tiers: []
      },
      dailyChapterActivities: {
        activityBundleHash: {},
        expirationDate: null,
        isCompleted: false,
        tierActivityHashes: []
      }
      },
      DestinyAdvisorItemUpgradeMaterial = {
      activityBundleHash: {},
      materialItemHash: {},
      itemSoidsUpgradable: []
      },
      DestinyAdvisorRaid = {
      activityBundleHash: {},
      raidIdentifier: [],
      expirationDate: null,
      tiers: []
      },
      DestinyAdvisorRaidTier = {
      activityHash: {},
      stepsComplete: 0,
      stepsTotal: 0
      },
      DestinyAdvisorNightfall = {
      activityBundleHash: {},
      expirationDate: null,
      tiers: []
      },
      DestinyAdvisorNightfallTier = {
      activityHash: {},
      isCompleted: false
      },
      DestinyAdvisorDailyChapter = {
      activityBundleHash: {},
      expirationDate: null,
      isCompleted: false,
      tierActivityHashes: []
      },
      DefinitionSetDestinyAdvisorData = {
      vendorDetails: [],
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      stats: [],
      progressions: [],
      materialRequirements: [],
      activityBundles: [],
      destinations: [],
      places: [],
      activityTypes: [],
      flags: [],
      activities: []
      },
      DestinyHistoricalStatsDefinition = {
      bagId: [],
      propertyId: [],
      divisorStatId: [],
      statId: [],
      group: 0,
      periodTypes: [],
      modes: [],
      category: 0,
      statName: [],
      statDescription: [],
      unitType: 0,
      iconImage: [],
      mergeMethod: 0,
      unitLabel: [],
      weight: 0
      },
      DestinyHistoricalStatsResults = {
      allPvE: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      story: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      strike: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      raid: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      explore: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      allPvP: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      pvpIntroduction: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      threeVsThree: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      control: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      lockdown: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      team: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      },
      freeForAll: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
      }
      },
      DestinyHistoricalStatsByPeriod = {
      allTime: [],
      allTimeTier1: [],
      allTimeTier2: [],
      allTimeTier3: [],
      daily: [],
      monthly: []
      },
      DestinyHistoricalStatsPeriodGroup = {
      period: null,
      activityDetails: {
        referenceId: {},
        instanceId: 0,
        mode: 0
      },
      values: []
      },
      DestinyHistoricalStatsActivity = {
      referenceId: {},
      instanceId: 0,
      mode: 0
      },
      DestinyHistoricalStatsValue = {
      statId: [],
      basic: {
        value: 0,
        displayValue: []
      },
      pga: {
        value: 0,
        displayValue: []
      },
      weighted: {
        value: 0,
        displayValue: []
      }
      },
      ServiceResultDestinyActivityHistoryResults = {
      data: {
        activities: []
      },
      definitions: {
        activities: [],
        destinations: [],
        places: [],
        activityTypes: []
      }
      },
      DestinyActivityHistoryResults = {
      activities: []
      },
      DefinitionSetDestinyActivityHistoryResults = {
      activities: [],
      destinations: [],
      places: [],
      activityTypes: []
      },
      ServiceResultDestinyHistoricalWeaponStatsData = {
      data: {
        weapons: []
      },
      definitions: {
        items: [],
        buckets: [],
        perks: [],
        talentGrids: [],
        sandboxPatterns: [],
        stats: [],
        progressions: [],
        materialRequirements: []
      }
      },
      DestinyHistoricalWeaponStatsData = {
      weapons: []
      },
      DestinyHistoricalWeaponStats = {
      referenceId: {},
      values: []
      },
      DefinitionSetDestinyHistoricalWeaponStatsData = {
      items: [],
      buckets: [],
      perks: [],
      talentGrids: [],
      sandboxPatterns: [],
      stats: [],
      progressions: [],
      materialRequirements: []
      },
      DestinyLeaderboardResults = {
      focusMembershipId: 0,
      focusCharacterId: 0,
      allPvE: [],
      story: [],
      strike: [],
      raid: [],
      explore: [],
      allPvP: [],
      pvpIntroduction: [],
      threeVsThree: [],
      control: [],
      lockdown: [],
      team: [],
      freeForAll: []
      },
      DestinyLeaderboard = {
      statId: [],
      entries: []
      },
      DestinyLeaderboardEntry = {
      rank: 0,
      player: {
        destinyUserInfo: {
          supplementalDisplayName: [],
          iconPath: [],
          membershipType: 0,
          membershipId: 0,
          displayName: []
        },
        characterClass: [],
        characterLevel: 0,
        bungieNetUserInfo: {
          supplementalDisplayName: [],
          iconPath: [],
          membershipType: 0,
          membershipId: 0,
          displayName: []
        }
      },
      characterId: 0,
      value: {
        statId: [],
        basic: {
          value: 0,
          displayValue: []
        },
        pga: {
          value: 0,
          displayValue: []
        },
        weighted: {
          value: 0,
          displayValue: []
        }
      }
      },
      DestinyPlayer = {
      destinyUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
      },
      characterClass: [],
      characterLevel: 0,
      bungieNetUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
      }
      },
      ServiceResultDestinyPostGameCarnageReportData = {
      data: {
        period: null,
        activityDetails: {
          referenceId: {},
          instanceId: 0,
          mode: 0
        },
        entries: []
      },
      definitions: {
        activities: [],
        destinations: [],
        places: [],
        activityTypes: []
      }
      },
      DestinyPostGameCarnageReportData = {
      period: null,
      activityDetails: {
        referenceId: {},
        instanceId: 0,
        mode: 0
      },
      entries: []
      },
      DestinyPostGameCarnageReportEntry = {
      player: {
        destinyUserInfo: {
          supplementalDisplayName: [],
          iconPath: [],
          membershipType: 0,
          membershipId: 0,
          displayName: []
        },
        characterClass: [],
        characterLevel: 0,
        bungieNetUserInfo: {
          supplementalDisplayName: [],
          iconPath: [],
          membershipType: 0,
          membershipId: 0,
          displayName: []
        }
      },
      characterId: 0,
      values: []
      },
      DefinitionSetDestinyPostGameCarnageReportData = {
      activities: [],
      destinations: [],
      places: [],
      activityTypes: []
      },
      ServiceResultDestinyAggregateActivityResults = {
      data: {
        activities: []
      },
      definitions: {
        activities: [],
        destinations: [],
        places: [],
        activityTypes: []
      }
      },
      DestinyAggregateActivityResults = {
      activities: []
      },
      DestinyAggregateActivityStats = {
      activityHash: {},
      values: []
      },
      DefinitionSetDestinyAggregateActivityResults = {
      activities: [],
      destinations: [],
      places: [],
      activityTypes: []
      },
      GrimoirePlayerDataResult = {
      data: {
        score: 0,
        cardCollection: [],
        cardsToHide: []
      },
      cardDefinitions: []
      },
      GrimoirePlayerData = {
      score: 0,
      cardCollection: [],
      cardsToHide: []
      },
      GrimoireUnlockedCard = {
      cardId: 0,
      score: 0,
      points: 0,
      statisticCollection: [],
      ackState: {
        needsAck: false,
        ackId: []
      }
      },
      GrimoireUnlockedStatistic = {
      statNumber: 0,
      value: 0,
      displayValue: [],
      rankCollection: []
      },
      GrimoireUnlockedRank = {
      rank: 0,
      points: 0,
      ackState: {
        needsAck: false,
        ackId: []
      }
      },
      DestinyGrimoireDefinition = {
      themeCollection: []
      },
      DestinyGrimoireThemeDefinition = {
      themeId: [],
      themeName: [],
      themeIntro: [],
      themeDescription: [],
      normalResolution: {
        image: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        },
        smallImage: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        }
      },
      highResolution: {
        image: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        },
        smallImage: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        }
      },
      pageCollection: []
      },
      DestinyGrimoireImageDefinition = {
      image: {
        rect: {
          x: 0,
          y: 0,
          height: 0,
          width: 0
        },
        sheetPath: [],
        sheetSize: {
          x: 0,
          y: 0,
          height: 0,
          width: 0
        }
      },
      smallImage: {
        rect: {
          x: 0,
          y: 0,
          height: 0,
          width: 0
        },
        sheetPath: [],
        sheetSize: {
          x: 0,
          y: 0,
          height: 0,
          width: 0
        }
      }
      },
      SpriteDefinition = {
      rect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      sheetPath: [],
      sheetSize: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      }
      },
      Rectangle = {
      x: 0,
      y: 0,
      height: 0,
      width: 0
      },
      DestinyGrimoirePageDefinition = {
      pageId: [],
      pageName: [],
      pageIntro: [],
      pageDescription: [],
      normalResolution: {
        image: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        },
        smallImage: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        }
      },
      highResolution: {
        image: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        },
        smallImage: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        }
      },
      cardCollection: [],
      cardBriefs: []
      },
      DestinyGrimoireCardDefinition = {
      cardId: 0,
      cardName: [],
      cardIntro: [],
      cardIntroAttribution: [],
      cardDescription: [],
      bonusName: [],
      bonusDescription: [],
      bonusRank: {
        statId: 0,
        rank: 0
      },
      unlockHowToText: [],
      cardLabel: [],
      rarity: 0,
      plcOfferId: [],
      unlockMethod: [],
      unlockFlagHash: {},
      unlockFlagId: [],
      points: 0,
      releaseId: [],
      normalResolution: {
        image: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        },
        smallImage: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        }
      },
      highResolution: {
        image: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        },
        smallImage: {
          rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          sheetPath: [],
          sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          }
        }
      },
      statisticCollection: [],
      referenceIdList: [],
      exclusive: {
        exclusiveToPlatform: 0,
        exclusiveUntil: null
      },
      notes: {
        rewardNumber: 0,
        coolDownSeconds: 0,
        imageState: []
      }
      },
      DestinyGrimoireBonusUnlock = {
      statId: 0,
      rank: 0
      },
      DestinyGrimoireExclusive = {
      exclusiveToPlatform: 0,
      exclusiveUntil: null
      },
      DestinyGrimoireCardNotes = {
      rewardNumber: 0,
      coolDownSeconds: 0,
      imageState: []
      },
      DestinyGrimoireStatisticDefinition = {
      statNumber: 0,
      cardId: 0,
      statDescription: [],
      statName: [],
      accumulatorHash: {},
      accumulatorId: [],
      flavourStatisticId: [],
      rankCollection: []
      },
      DestinyGrimoireStatisticRankDefinition = {
      rank: 0,
      threshold: 0,
      unlockFlagHash: {},
      unlockFlagId: [],
      points: 0
      },
      DestinyGrimoireCardBrief = {
      cardId: 0,
      points: 0
      },
      CoreSettingsConfiguration = {
      ignoreReasons: [],
      forumCategories: [],
      groupAvatars: [],
      destinyMembershipTypes: []
      },
      CoreSetting = {
      identifier: [],
      isDefault: false,
      displayName: [],
      summary: [],
      imagePath: []
      },
      GlobalAlert = {
      AlertSummary: [],
      AlertText: [],
      AlertTimestamp: null
      };
  (function(a) {
    bungieNetPlatform.assetRenderer = {
      renderAsset: function(t) {
        var b = a.extend({
          path: "",
          width: "auto",
          height: "auto",
          fixedRatioHeight: "auto",
          hasAgeGate: false,
          minimumAge: 0,
          ratingImagePath: "",
          display: "auto"
        }, t),
            v, d, j;
        if (a(".ageGateTemplate").length == 0 || typeof viewModels == "undefined" || !viewModels.userMinimumAge) b.hasAgeGate = false;
        if (typeof viewModels != "undefined") if (viewModels.loggedInUserModelIsLoaded()) if (viewModels.loggedInUserModel().adultMode()) b.hasAgeGate = false;
        var g = "";
        if (b.display != "auto") g = "display: " + b.display + ";";
        if (j = b.path.match(/\.(jpg|jpeg|png|gif)(\?(.)*){0,1}$/i)) {
          var i = b.width == "auto" ? "" : "width: " + b.width + "; ",
              f = b.height == "auto" ? "" : "height: " + b.height + "; ";
          if (b.path.indexOf("http://") > -1) d = "<img src='" + Utility.ContentVersioned(b.path) + "' style='" + i + f + g + "' />";
          else d = "<img src='" + Utility.ContentVersioned(b.path) + "' style='" + i + f + g + "' />"
        } else if (j = b.path.match(/\.(mov|avi)(\?(.)*){0,1}$/i)) {
          var i = b.width == "auto" ? "" : "width='" + b.width + "' ",
              f = b.height == "auto" ? "" : "height='" + b.height + "' ";
          d = "<video " + i + f + " style='" + g + "'><source src='" + Utility.ContentVersioned(b.path) + "' type='video/" + j[0] + "' /></video>"
        } else if (j = b.path.match(/^(?:https?:\/\/)?(?:(www|m)\.)?(youtube\.com|youtu\.be)?(\/\w)/i)) if (b.path.toLowerCase().indexOf("playlist") > -1) d = "<a class='externalLink' href='" + b.path + "' style='" + g + "'>" + b.path + "</a>";
        else {
          var c = b.path,
              u = false,
              k, l = {};
          if (b.path.indexOf("v=") > -1) c = b.path.replace(/^((?:https?:\/\/)?(?:(?:www|m)\.)?)(youtube\.com|youtu\.be)[\s\S]*?v=([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$1youtube.com/embed/$3");
          else c = b.path.replace(/^((?:https?:\/\/)?(?:(?:www|m)\.)?)(youtube\.com|youtu\.be)[\s\S]*\/([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$1youtube.com/embed/$3");
          c = c.replace("/m.", "/www.");
          if (c.indexOf("?") > -1) {
            l = Utility.parseQueryString(c);
            var s = c.split("?");
            c = s[0]
          }
          if (b.path.indexOf("#t=") > -1 || b.path.indexOf("?t=") > -1) {
            var h = b.path.match(/[#|\?]t=((\d+m)?(\d+[s]?)?)/i);
            if (h.length > 1) h = h[0].split("=")[1];
            var p = h.match("m") ? h.split("m")[0] : 0,
                q = p.length ? h.split("m")[1].split("s")[0] : h.split("s")[0];
            k = parseInt(p * 60) + parseInt(q ? q : 0)
          }
          if (typeof l.start !== "undefined") k = l.start;
          if (window.location.protocol.indexOf("https") > -1 && c.indexOf("https") === -1) c = c.replace("http", "https");
          if (k) c = c + "?start=" + k;
          var i = b.width == "auto" ? "" : "width='" + b.width + "' ",
              f = b.height == "auto" ? "" : "height='" + b.height + "' ";
          if (b.fixedRatioHeight != "auto") f = "height='" + b.fixedRatioHeight + "' ";
          var r = k ? "&" : "?";
          d = "<iframe class='youtube-player' style='" + g + "' type='text/html' " + i + f + " src='" + c + r + "wmode=transparent&rel=0&fs=1' frameborder='0' allowfullscreen></iframe>"
        } else if (j = b.path.match(/player\.ooyala\.com/i)) {
          var i = b.width == "auto" ? "" : "width='" + b.width + "' ",
              f = b.height == "auto" ? "" : "height='" + b.height + "' ";
          if (b.fixedRatioHeight != "auto") f = "height='" + b.fixedRatioHeight + "' ";
          return "<iframe src='" + b.path + "' " + i + f + " style='" + g + "' frameBorder='0'></iframe>"
        } else if (j = b.path.match(/soundcloud\.com/i)) {
          var n = b.path.replace("http://soundcloud.com", "http://api.soundcloud.com");
          n = encodeURIComponent(n.replace("http://www.soundcloud.com", "http://api.soundcloud.com"));
          var i = b.width == "auto" ? "" : "width='" + b.width + "' ",
              f = b.height == "auto" ? "" : "height='" + b.height + "' ";
          if (b.fixedRatioHeight != "auto") f = "height='" + b.fixedRatioHeight + "' ";
          var o = "https://w.soundcloud.com/player/?url=" + n + "&buying=false&sharing=false&download=false&show_bpm=false&show_playcount=false&auto_play=false&show_artwork=false&show_comments=false&show_user=false";
          o = a("<div />").text(o).html();
          d = "<iframe " + i + f + " scrolling='no' frameborder='no' src='" + o + "'></iframe>"
        } else if (b.path.match(/^http/i)) d = "<a class='externalLink' href='" + b.path + "' style='" + g + "'>" + b.path + "</a>";
        else d = "";
        if (b.hasAgeGate) {
          var e = a("<div>" + a(".ageGateTemplate").html() + "</div>"),
              m = e.find(".ageGateContents");
          m.attr("data-minimumAge", b.minimumAge);
          e.find(".ageGatePrompt").attr("data-minimumAge", b.minimumAge);
          b.width && b.width != "auto" && e.find(".ageGatePrompt").css("width", b.width + "px");
          b.height && b.height != "auto" && e.find(".ageGatePrompt").css("height", b.height + "px");
          e.find(".ratingImage").attr("src", b.ratingImagePath);
          e.find(".ratingImage").css("width", "auto");
          e.find(".ratingAllowed li").each(function() {
            var c = a(this);
            c.html(c.html().replace("#AGE", b.minimumAge))
          });
          m.html(d);
          if (b.minimumAge <= viewModels.userMinimumAge()) {
            e.find(".ageGatePrompt").addClass("hide");
            m.removeClass("hide")
          }
          d = "<div class='ageGate'>" + e.html() + "</div>"
        }
        return d
      },
      getYoutubeId: function(a) {
        return (matches = a.match(/youtube\.com|youtu\.be/i)) ? a.indexOf("v=") > -1 ? a.replace(/^([\s\S]*)(youtube\.com|youtu\.be)[\s\S]*?v=([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$3") : a.replace(/^([\s\S]*)(youtube\.com|youtu\.be)[\s\S]*\/([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$3") : ""
      },
      renderAssetThumbnail: function(i) {
        var b = a.extend({
          path: "",
          width: "auto",
          height: "auto",
          quality: "default"
        }, i),
            c = "",
            f, g = false,
            e = "";
        if (b.width != "auto") e = "width: " + b.width + ";";
        var d = "";
        if (b.height != "auto") d = "height: " + b.height + ";";
        if (f = b.path.match(/\.(jpg|jpeg|png|bmp|gif|tiff)(\?(.)*){0,1}$/i)) c = b.path;
        else if (f = b.path.match(/youtube\.com|youtu\.be/i)) {
          g = true;
          var h = bungieNetPlatform.assetRenderer.getYoutubeId(b.path);
          if (h != "") c = "http://i2.ytimg.com/vi/" + h + "/" + b.quality + ".jpg"
        } else if (f = b.path.match(/player\.ooyala\.com/i)) return "<div style='" + e + d + "; padding: 10px; border: solid 1px black; overflow: hide;'><iframe src='" + b.path + "' frameBorder='0'></iframe></div>";
        return c != "" ? g ? "<img draggable='false' src='" + Utility.ContentVersioned(c) + "' class='thumbnailImages youtubeVideo' />" : b.path.indexOf("http://") > -1 ? "<img draggable='false' src='" + Utility.ContentVersioned("/img/theme/bungienet/placeholders/blank.gif") + "' class='thumbnailImages' style='background-image: url(\"" + c + '"); background-size: contain; background-repeat: no-repeat; background-position: center; ' + e + d + "' />" : "<img draggable='false' src='" + Utility.ContentVersioned("/img/theme/bungienet/placeholders/blank.gif") + "' class='thumbnailImages' style='background-image: url(\"" + Utility.ContentVersioned(c) + '"); ' + e + d + "' />" : ""
      }
    }
  })(jQuery);
  (function(a) {
    function b(e, g, f, h) {
      var c = a.extend({
        templateType: "",
        isTypeAgnostic: false,
        headOnly: false,
        itemRenderedCallback: function() {},
        renderCompleteCallback: function() {},
        errorCallback: function() {},
        renderAttributes: []
      }, e);
      c.query = a.extend(g, e.query);
      var b = {
        results: [],
        query: {
          itemsPerPage: 10,
          currentPage: 1
        }
      };
      for (var d in bungieNetPlatform.contentCache) if (f(bungieNetPlatform.contentCache[d], c)) {
        b.results.push(bungieNetPlatform.contentCache[d]);
        break
      }
      if (b.results.length > 0) {
        b.query.itemsPerPage = b.results.length;
        b.totalResults = b.results.length;
        b.hasMore = false;
        bungieNetPlatform.contentRenderer.renderContentItemList(b, c)
      } else {
        var i = h(c);
        a.when(i).done(function(a) {
          bungieNetPlatform.contentRenderer.renderContentItemList(a, c)
        })
      }
    }
    bungieNetPlatform.contentRenderer = {
      renderContentItemList: function(f, h) {
        var c, d, b, e = f.results,
            g = h;
        if (e.length > 0) h.firstResultCallback();
        else h.renderCompleteCallback(e.length, b, f);
        a.each(e, function() {
          var f = this;
          if (c) {
            var e = a.Deferred();
            a.when(c).done(function() {
              a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(f, g)).done(function(a) {
                b = b + a;
                e.resolve()
              }).fail(function() {
                console.log("renderContentItemList: LoadTemplateDeferred Failed.");
                e.resolve()
              })
            });
            c = e
          } else {
            d = a.Deferred();
            c = d;
            a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(f, g)).done(function(a) {
              b = b + a;
              d.resolve()
            }).fail(function() {
              console.log("renderContentItemList: LoadTemplateDeferred Failed.");
              d.resolve()
            })
          }
        });
        c && a.when(c).done(function() {
          g.renderCompleteCallback(e.length, b, f)
        }).fail(function() {
          console.log("renderContentItemList: renderCompleteCallback Failed.")
        })
      },
      loadTemplateDeferred: function(c, b) {
        var d = c.cType;
        if (b.isTypeAgnostic) d = "generic";
        var e = "/Scripts/templates/";
        e += b.templateType + "/" + d + ".js";
        return templateEngine.getTemplate(e, b.templateType + "/" + d, c, b.parents, b.renderAttributes, function(d) {
          if (bungieNetPlatform.platformSettings.renderContentEditLinks) {
            var f = a(d),
                e = "<div class='firehoseEditLink'><a href='/Firehose/Content/EditWithNewPackage/" + c.contentId + "'>(Edit this item)</a></div>";
            f.prepend(e);
            if (d.trim()[0] == "<") d = d.slice(0, d.indexOf(">") + 1) + e + d.slice(d.indexOf(">") + 1);
            else d = e + d
          }
          b.itemRenderedCallback(c, d)
        })
      },
      renderContentFromId: function(d) {
        var b = a.extend({
          contentId: 0,
          locale: bungieNetPlatform.platformSettings.currentLocale,
          templateType: "",
          isTypeAgnostic: false,
          headOnly: false,
          itemRenderedCallback: function() {},
          renderCompleteCallback: function() {},
          errorCallback: function() {},
          renderAttributes: []
        }, d);
        if (typeof bungieNetPlatform.contentCache[b.contentId] != "undefined") a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(bungieNetPlatform.contentCache[b.contentId], b)).done(function(a) {
          b.renderCompleteCallback(1, a, bungieNetPlatform.contentCache[b.contentId])
        });
        else {
          if (isNaN(b.contentId) || b.contentId <= 0) {
            b.renderCompleteCallback(0, "", null);
            return
          }
          var c = bungieNetPlatform.previewableContentServices.getForId({
            contentId: b.contentId,
            locale: b.locale,
            headOnly: b.headOnly,
            callback: function() {},
            errorCallback: function(a) {
              console.log("renderContentFromId: Failed (" + a + ")");
              b.errorCallback(a)
            }
          });
          a.when(c).done(function(c) {
            a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(c, b)).done(function(a) {
              b.renderCompleteCallback(1, a, c)
            })
          })
        }
      },
      renderContent: function(c) {
        var b = a.extend({
          contentObject: null,
          templateType: "",
          isTypeAgnostic: false,
          itemRenderedCallback: function() {},
          renderCompleteCallback: function() {},
          errorCallback: function() {},
          renderAttributes: []
        }, c);
        if (!b.contentObject) {
          b.renderCompleteCallback(0, "", null);
          return
        }
        a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(b.contentObject, b)).done(function(a) {
          b.renderCompleteCallback(1, a, b.contentObject)
        })
      },
      renderNewsContent: function(a) {
        b(a, {
          contentType: "",
          newsType: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          itemsPerPage: 10,
          currentPage: 1
        }, function(b, a) {
          return b.cType == a.query.contentType
        }, function(a) {
          return bungieNetPlatform.contentService.GetNews(a.query.newsType, a.query.locale, a.query.itemsPerPage, a.query.currentPage, function() {}, function(b) {
            console.log("renderNewsContent: Search Failed (" + b + ")");
            a.errorCallback(b)
          })
        })
      },
      renderContentFromQuery: function(a) {
        b(a, {
          contentTypes: [],
          tag: "",
          notTag: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          itemsPerPage: 100,
          currentPage: 1,
          sortBy: Globals.ContentSortBy.CreationDate,
          creationDate: Globals.ContentDateRange.All,
          modifiedDate: Globals.ContentDateRange.All
        }, function(b, a) {
          return b.cType == a.query.contentTypes[contentType]
        }, function(a) {
          return bungieNetPlatform.contentService.SearchContentEx(a.query, a.query.locale, a.headOnly, function() {}, function(b) {
            console.log("renderContentFromQuery: Search Failed (" + b + ")");
            a.errorCallback(b)
          })
        })
      },
      renderContentFromTagAndType: function(a) {
        b(a, {
          contentType: "",
          tag: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          itemsPerPage: 10,
          currentPage: 1
        }, function(b, a) {
          return b.cType == a.query.contentType
        }, function(a) {
          return bungieNetPlatform.previewableContentServices.searchForTagAndType({
            tag: a.query.tag,
            contentType: a.query.contentType,
            locale: a.query.locale,
            headOnly: a.headOnly,
            currentPage: a.query.currentPage,
            itemsPerPage: a.query.itemsPerPage,
            callback: function() {},
            errorCallback: function(b) {
              console.log("renderContentFromTagAndType: Search Failed (" + b + ")");
              a.errorCallback(b)
            },
            headOnly: false
          })
        })
      },
      renderContentItemFromTagAndType: function(d) {
        var b = a.extend({
          contentType: "",
          tag: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          templateType: "",
          isTypeAgnostic: false,
          headOnly: false,
          renderCompleteCallback: function() {},
          errorCallback: function() {},
          renderAttributes: []
        }, d),
            c = bungieNetPlatform.previewableContentServices.getForTagAndType({
            tag: b.tag,
            contentType: b.contentType,
            locale: b.locale,
            callback: function() {},
            errorCallback: function(a) {
              console.log("renderContentItemFromTagAndType: Search Failed (" + a + ")");
              b.errorCallback(a)
            },
            headOnly: b.headOnly
          });
        a.when(c).done(function(c) {
          a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(c, b)).done(function(a) {
            b.renderCompleteCallback(1, a, c)
          })
        })
      },
      renderContentData: function(f) {
        var b = a.extend({
          content: "",
          width: "auto",
          height: "auto",
          templateType: ""
        }, f),
            c = "",
            e;
        if (b.content == "") return "(blank)";
        if (typeof b.content === "object") {
          for (var d = 0; d < b.content.length; d++) {
            c += "Item " + d + ": " + bungieNetPlatform.contentRenderer.renderContentData(a.extend(a.extend({}, b), {
              content: b.content[d]
            }));
            c += "<br />"
          }
          return c
        }
        if (!isNaN(b.content)) {
          c = "(Content Item Reference #" + b.content + ")<br /> [[data-content-id='" + b.content + "' data-template-type='" + b.templateType + "']]";
          return c
        }
        if (e = b.content.match(/\<\//)) {
          c = "<div style='width: " + b.width + "; height: " + b.height + ";'>" + b.content + "</div>";
          return c
        }
        c = bungieNetPlatform.assetRenderer.renderAsset({
          path: b.content,
          width: b.width,
          height: b.height
        });
        if (c != "") {
          c += "<div data-asset-path='" + b.content + "'></div><div><strong>Stored URL:</strong>" + b.content + "</div>\n";
          return c
        }
        return b.content
      }
    }
  })(jQuery);
  (function() {
    function c(c) {
      var b = c.split("[[").join("<div class='MacroProcess' ").split("]]").join("></div>");
      if (window.location.protocol == "https:") b = b.split("http:").join("https:");
      else b = b.split("https:").join("http:");
      b = a(b).trim();
      return b
    }
    function a(a) {
      var g = new RegExp(/\{\{url=\'([^\}]+)\'\}\}([^\{]+)\{\{\/url\}\}/g),
          b;
      while ((b = g.exec(a)) != null) {
        var f = b[0],
            c = b[1],
            e = b[2];
        if (c[0] == "/") c = "/" + bungieNetPlatform.platformSettings.currentLocale + c;
        var d = "<a href='" + c + "'>" + e + "</a>";
        a = a.split(f).join(d)
      }
      return a
    }
    function b(a) {
      if (a[0] == "/") a = "/" + bungieNetPlatform.platformSettings.currentLocale + a;
      return a
    }
    bungieNetPlatform.macroProcessor = {
      getNormalizedHtml: function(a) {
        return c(a)
      },
      renderWithHints: function(a, b) {
        a = a.replace(/\{\{more\}\}[\s\S]*/g, "");
        a = a.replace(/\{\{([^}]*)\}\}/g, "");
        a = bungieNetPlatform.macroProcessor.processTemplateOverride(a, b);
        return a
      },
      renderIgnoreHints: function(a, b) {
        a = a.replace(/\{\{([^}]*)\}\}/g, "");
        a = bungieNetPlatform.macroProcessor.processTemplateOverride(a, b);
        return a
      },
      renderWithHintDebug: function(b, c) {
        b = a(b);
        b = b.replace(/\{\{([^}]*)\}\}/g, "<br /><strong><i>&lt;-- $1 --&gt;</i></strong><br />");
        b = bungieNetPlatform.macroProcessor.processTemplateOverride(b, c);
        return b
      },
      processUrls: a,
      convertRelativeUrl: b,
      processTemplateOverride: function(b, a) {
        return typeof a != "undefined" && a != null && a != "" ? b.replace(/data\-template\-type\=\'([^\']+)\'/g, "data-template-type='" + a + "'") : b
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.contentRepresentationServices = {
      dataStore: [],
      data: {
        "get": function(a, b) {
          return bungieNetPlatform.contentRepresentationServices.dataStore[a + "_" + b]
        },
        "set": function(a, c, b) {
          bungieNetPlatform.contentRepresentationServices.dataStore[a + "_" + c] = b
        }
      },
      getRepresentationsForType: function(e) {
        var b = a.extend({
          contentType: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          callback: function() {},
          errorCallback: function() {}
        }, e),
            c = bungieNetPlatform.contentRepresentationServices.data.get(b.contentType, b.locale);
        if (c) return a.Deferred(function(a) {
          b.callback(c);
          a.resolve(c)
        }).promise();
        var d = bungieNetPlatform.platformSettings.platformUrl + "/Content/Representation/GetRepresentationsForType/" + b.contentType + "/" + b.locale + "/";
        return bungieNetPlatform.serviceLibrary.get(d, function(a) {
          bungieNetPlatform.contentRepresentationServices.data.set(b.contentType, b.locale, a);
          b.callback(a)
        }, b.errorCallback)
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.contentServices = {
      dataStore: [],
      contentData: {
        getContent: function(a, b) {
          return bungieNetPlatform.contentServices.dataStore[a + "_" + b]
        },
        setContent: function(a) {
          bungieNetPlatform.contentServices.dataStore[a.contentId + "_" + a.locale] = a
        }
      },
      search: function(d) {
        var c = a.extend({
          callback: function() {},
          errorCallback: function() {},
          headOnly: false
        }, d),
            b = a.extend({
            contentTypes: "",
            tag: "",
            notTag: "",
            locale: bungieNetPlatform.platformSettings.currentLocale,
            itemsPerPage: 100,
            currentPage: 1,
            sortBy: Globals.ContentSortBy.CreationDate,
            creationDate: Globals.ContentDateRange.All,
            modifiedDate: Globals.ContentDateRange.All
          }, d.query),
            e = bungieNetPlatform.platformSettings.platformUrl + "/Content/Search/" + b.locale + "/?types=" + b.contentTypes + "&tag=" + b.tag + "&sortby=" + b.sortBy + "&itemsperpage=" + b.itemsPerPage + "&currentpage=" + b.currentPage;
        if (c.headOnly) e += "&head=true";
        return bungieNetPlatform.serviceLibrary.get(e, function(b) {
          a.each(b, function() {
            bungieNetPlatform.contentServices.contentData.setContent(this)
          });
          c.callback(b)
        }, c.errorCallback)
      },
      getForId: function(e) {
        var b = a.extend({
          contentId: 0,
          locale: bungieNetPlatform.platformSettings.currentLocale,
          callback: function() {},
          errorCallback: function() {},
          headOnly: false
        }, e),
            c = null;
        c = bungieNetPlatform.contentServices.contentData.getContent(b.contentId, b.locale);
        if (c) return a.Deferred(function(a) {
          b.callback(c);
          a.resolve(c)
        }).promise();
        else {
          var d = bungieNetPlatform.platformSettings.platformUrl + "/Content/GetContentById/" + b.contentId + "/" + b.locale + "/";
          if (b.headOnly) d += "?head=true";
          return bungieNetPlatform.serviceLibrary.get(d, function(a) {
            bungieNetPlatform.contentServices.contentData.setContent(a);
            b.callback(a)
          }, b.errorCallback)
        }
      }
    }
  })(jQuery);
  (function(a) {
    bungieNetPlatform.previewableContentServices = {
      dataStore: [],
      contentData: {
        getContent: function(a, b) {
          return bungieNetPlatform.previewableContentServices.dataStore[a + "_" + b]
        },
        setContent: function(a) {
          bungieNetPlatform.previewableContentServices.dataStore[a.contentId + "_" + a.locale] = a
        }
      },
      getCachedResultsForQuery: function(b) {
        var a = {
          results: [],
          query: b,
          totalResults: 0
        };
        for (var c in bungieNetPlatform.contentCache) for (var d in b.contentTypes) if (bungieNetPlatform.contentCache[c].cType == b.contentTypes[d]) {
          a.results.push(bungieNetPlatform.contentCache[c]);
          break
        }
        a.totalResults = a.results.length;
        return a
      },
      getCachedResultsForType: function(c) {
        var a = {
          results: [],
          query: {
            contentType: c
          },
          totalResults: 0
        };
        for (var b in bungieNetPlatform.contentCache) bungieNetPlatform.contentCache[b].cType == c && a.results.push(bungieNetPlatform.contentCache[b]);
        a.totalResults = a.results.length;
        return a
      },
      search: function(d) {
        var b = a.extend({
          callback: function() {},
          errorCallback: function() {},
          headOnly: false
        }, d),
            f = a.extend({
            contentTypes: [""],
            tag: "",
            notTag: "",
            locale: bungieNetPlatform.platformSettings.currentLocale,
            itemsPerPage: 100,
            currentPage: 1,
            sortBy: Globals.ContentSortBy.CreationDate,
            creationDate: Globals.ContentDateRange.All,
            modifiedDate: Globals.ContentDateRange.All
          }, d.query),
            c = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery(b.query);
        if (c.results.length > 0) {
          var e = a.Deferred();
          b.callback(c);
          e.resolve();
          return e
        } else
        return bungieNetPlatform.contentService.SearchContentEx(f, f.locale, b.headOnly, b.callback, b.errorCallback)
      },
      getHomepageContent: function(f) {
        var c = a.extend({
          locale: bungieNetPlatform.platformSettings.currentLocale,
          callback: function() {},
          errorCallback: function() {}
        }, f),
            b = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
            contentTypes: ["ContentSet"]
          }),
            d = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
            contentTypes: ["News"]
          });
        if (b.results.length > 0 || d.results.length > 0) {
          var e = a.Deferred(),
              g = {
              rotator: {
                ErrorCode: 1,
                ErrorStatus: b.results.length > 0 ? "Success" : "Fail",
                Message: "Ok",
                Response: b.results.length > 0 ? b.results[0] : null
              },
              blog: {
                ErrorCode: 1,
                ErrorStatus: "Success",
                Message: "Ok",
                Response: d.results
              },
              calloutSet: {
                ErrorCode: 1,
                ErrorStatus: b.results.length > 0 ? "Success" : "Fail",
                Message: "Ok",
                Response: b.results.length > 0 ? b.results[0] : null
              }
              };
          c.callback(g);
          e.resolve();
          return e
        } else
        return bungieNetPlatform.contentService.GetHomepageContent(c.locale, c.callback, c.errorCallback)
      },
      getForId: function(e) {
        var b = a.extend({
          contentId: 0,
          locale: bungieNetPlatform.platformSettings.currentLocale,
          callback: function() {},
          errorCallback: function() {},
          headOnly: false
        }, e);
        if (typeof bungieNetPlatform.contentCache[b.contentId] != "undefined") {
          var d = a.Deferred();
          b.callback(bungieNetPlatform.contentCache[b.contentId]);
          d.resolve();
          return d
        } else {
          var c = null;
          c = bungieNetPlatform.previewableContentServices.contentData.getContent(b.contentId, b.locale);
          return c ? a.Deferred(function(a) {
            b.callback(c);
            a.resolve(c)
          }).promise() : bungieNetPlatform.contentService.GetContentById(b.contentId, b.locale, b.headOnly, function(a) {
            bungieNetPlatform.previewableContentServices.contentData.setContent(a);
            b.callback(a)
          }, b.errorCallback)
        }
      },
      getForTagAndType: function(d) {
        var b = a.extend({
          tag: "",
          contentType: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          callback: function() {},
          errorCallback: function() {},
          headOnly: false
        }, d),
            c = bungieNetPlatform.previewableContentServices.getCachedResultsForType(d.contentType);
        return c.results.length ? a.Deferred(function(a) {
          b.callback(c.results[0]);
          a.resolve(c.results[0])
        }).promise() : bungieNetPlatform.contentService.GetContentByTagAndType(b.tag, b.contentType, b.locale, b.headOnly, b.callback, b.errorCallback)
      },
      searchForTagAndType: function(d) {
        var b = a.extend({
          tag: "",
          contentType: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          currentPage: 1,
          itemsPerPage: 10,
          callback: function() {},
          errorCallback: function() {},
          headOnly: false
        }, d),
            c = bungieNetPlatform.previewableContentServices.getCachedResultsForType(d.contentType);
        return c.results.length ? a.Deferred(function(a) {
          b.callback(c);
          a.resolve(c)
        }).promise() : bungieNetPlatform.contentService.SearchContentByTagAndType(b.tag, b.contentType, b.locale, b.headOnly, b.currentPage, b.itemsPerPage, b.callback, b.errorCallback)
      },
      getJobs: function(e) {
        var b = a.extend({
          locale: bungieNetPlatform.platformSettings.currentLocale,
          callback: function() {},
          errorCallback: function() {}
        }, e),
            c = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
            contentTypes: ["ContentSet"]
          });
        if (c.results.length > 0) {
          var d = a.Deferred();
          b.callback(c);
          d.resolve();
          return d
        } else bungieNetPlatform.contentService.GetJobs(b.locale, b.callback, b.errorCallback)
      }
    }
  })(jQuery);
  this.templateEngine = {
    version: "cv=0&av=0"
  };
  (function() {
    var a = {};
    templateEngine.template = function(b) {
      b.identifier = b.identifier || b.str;
      var c;
      if (a[b.identifier]) c = a[b.identifier];
      else {
        var d = "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + b.str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');",
            c = !/\W/.test(b.str) && b.str != "" ? templateEngine.template({
            str: document.getElementById(b.str).innerHTML,
            identifier: b.identifier
          }) : new Function("obj", "parents", "renderAttributes", d);
        if (!/\W/.test(b.identifier)) a[b.identifier] = c
      }
      return b.data ? c(b.data, b.parents, b.renderAttributes) : c
    };
    var b = 1;
    templateEngine.getTemplate = function(f, c, h, g, d, b, e) {
      return a[c] ? $.Deferred(function(f) {
        var e = a[c](h, g, d);
        e = bungieNetPlatform.macroProcessor.getNormalizedHtml(e);
        b && b(e);
        f.resolve(e)
      }).promise() : $.Deferred(function(a) {
        $.ajax({
          type: "GET",
          url: f + "?" + templateEngine.version,
          dataType: "text",
          success: function(f) {
            var e = templateEngine.template({
              str: f,
              identifier: c,
              data: h,
              parents: g,
              renderAttributes: d
            });
            e = bungieNetPlatform.macroProcessor.getNormalizedHtml(e);
            b && b(e);
            a.resolve(e)
          },
          error: function(d, b, c) {
            e && e(d, b, c);
            console.log("templateEngine.getTemplate: template not found at '" + f + "'.");
            a.reject()
          }
        })
      }).promise()
    }
  })();

  (function(a) {
    a.fn.htmlWithMacroProcessing = function(d) {
      var e = bungieNetPlatform.macroProcessor.getNormalizedHtml(d.content);
      return this.each(function() {
        var f = a(this);
        f.html(e);
        f.each(function() {
          var e = c(d);
          b(a(this), e)
        })
      })
    };
    a.fn.appendWithMacroProcessing = function(e) {
      var d = bungieNetPlatform.macroProcessor.getNormalizedHtml(e.content);
      if (d != "") return this.each(function() {
        var g = a(this),
            f = a(d);
        g.append(f);
        f.each(function() {
          var d = c(e);
          b(a(this), d)
        })
      })
    };
    a.fn.MacroProcess = function(d) {
      return this.each(function() {
        var e = a(this),
            f = c(d);
        b(e, f)
      })
    };

    function c(c) {
      var b = a.extend({
        content: "",
        parents: [],
        itemRenderedCallback: function() {},
        renderCompleteCallback: function() {}
      }, c);
      b.parents = a.merge([], b.parents);
      return b
    }
    function b(b, c) {
      return b.hasClass("MacroProcess") ? a.when(b.renderContentFromAttributes(c), b.find(".MacroProcess").renderContentFromAttributes(c)) : a.when(b.find(".MacroProcess").renderContentFromAttributes(c))
    }
  })(jQuery);
  (function(a) {
    a.fn.renderAsset = function(c) {
      var b = a.extend({
        path: "",
        width: "auto",
        height: "auto",
        onComplete: function() {}
      }, c);
      return this.each(function() {
        var c = a(this),
            d = {
            path: c.attr("data-asset-path") ? c.attr("data-asset-path") : b.path,
            width: c.attr("data-asset-width") ? c.attr("data-asset-width") : b.width,
            height: c.attr("data-asset-height") ? c.attr("data-asset-height") : b.height
            },
            e = bungieNetPlatform.assetRenderer.renderAsset(d);
        c.append(e);
        b.onComplete(c)
      })
    };
    a.fn.renderAssetThumbnail = function(c) {
      var b = a.extend({
        path: "",
        width: "auto",
        height: "auto",
        onComplete: function() {}
      }, c);
      return this.each(function() {
        var c = a(this),
            d = {
            path: c.attr("data-asset-path") ? c.attr("data-asset-path") : b.path,
            width: c.attr("data-asset-width") ? c.attr("data-asset-width") : b.width,
            height: c.attr("data-asset-height") ? c.attr("data-asset-height") : b.height
            },
            e = bungieNetPlatform.assetRenderer.renderAssetThumbnail(d);
        c.append(e);
        b.onComplete(c)
      })
    };
    a.fn.renderAssetMetadata = function() {
      return this.each(function() {
        var b = a(this),
            c = b.attr("data-asset-path");
        bungieNetPlatform.contentServices.getAssetMetadata(c, function(a) {
          templateEngine.getTemplate("/Scripts/templates/AssetMetadata/AssetMetadata.js", "AssetMetadata_" + c, a, null, [], function(a) {
            b.html(a)
          }, function() {
            b.text("Metadata retrieved, but could not process the metadata display template.")
          })
        }, function() {
          b.text("Error retrieving asset metadata.")
        })
      })
    }
  })(jQuery);
  (function(a) {
    var b = function() {
      var a = this;
      a.count = 0;
      a.identifiers = 0;
      a.actions = [];
      a.pushCall = function(c) {
        a.count++;
        var b = a.identifiers;
        a.identifiers++;
        a.actions.push({
          command: c,
          identifier: b
        });
        return b
      };
      a.popCall = function(b) {
        for (i = 0; i < a.actions.length; i++) if (a.actions[i].identifier == b) {
          a.actions.splice(i, 1);
          return true
        }
        console.log("Transaction: No Identifier for popped call " + b + "!")
      }
    },
        j = [];

    function g(b, f, d, e, a, c) {
      var g = b.children();
      b.hasClass("MacroProcess") && b.replaceWith(g);
      c(f, d, e);
      a.transaction.popCall(a.identifier);
      a.transaction.actions.length == 0 && a.traversalCompleteCallback(a.transaction.count)
    }
    function h(g, c, e, b, f) {
      var d;
      if (c) d = a.merge(a.merge([], b.parents), [c]);
      else d = a.merge([], b.parents);
      g.appendWithMacroProcessing({
        content: e,
        parents: d,
        templateType: b.templateType,
        transaction: b.transaction,
        traversalCompleteCallback: b.traversalCompleteCallback
      });
      f(c, e)
    }
    function c(d, e) {
      var c = e[0];
      d.renderAttributes = [];
      for (var b = 0; b < c.attributes.length; b++) {
        var a = c.attributes[b];
        if (a) if (a.name.indexOf("data-") > -1) d.renderAttributes[a.name] = a.value
      }
    }
    function d(c, b) {
      var f = c.itemRenderedCallback,
          e = c.renderCompleteCallback,
          d = a.extend({}, c, {
          path: b.attr("data-content-path") ? b.attr("data-content-path") : c.contentPath,
          contentId: b.attr("data-content-id") ? b.attr("data-content-id") : c.contentId,
          locale: b.attr("data-content-locale") ? b.attr("data-content-locale") : c.locale,
          templateType: b.attr("data-template-type") ? b.attr("data-template-type") : c.templateType,
          propertyName: b.attr("data-property-name") ? b.attr("data-property-name") : c.propertyName,
          isTypeAgnostic: b.attr("data-is-type-agnostic") ? b.attr("data-is-type-agnostic").toLowerCase() == "true" : c.isTypeAgnostic
        });
      d.itemRenderedCallback = function(c, a) {
        h(b, c, a, d, f)
      };
      d.renderCompleteCallback = function(f, a, c) {
        g(b, f, a, c, d, e)
      };
      d.firstResultCallback = function() {
        b.html("")
      };
      return d
    }
    a.fn.renderContentFromId = function(f) {
      var e = a.extend({
        contentId: 0,
        locale: bungieNetPlatform.platformSettings.currentLocale,
        templateType: "",
        isTypeAgnostic: false,
        itemRenderedCallback: function() {},
        renderCompleteCallback: function() {},
        traversalCompleteCallback: function() {},
        errorCallback: function() {},
        parents: [],
        transaction: new b,
        headOnly: false,
        renderAttributes: []
      }, f);
      return this.each(function() {
        var f = a(this),
            b = d(e, f);
        b.identifier = b.transaction.pushCall("renderContentFromId");
        c(b, f);
        bungieNetPlatform.contentRenderer.renderContentFromId(b)
      })
    };
    a.fn.renderContentItemFromTagAndType = function(a) {
      f("renderContentItemFromTagAndType", bungieNetPlatform.contentRenderer.renderContentItemFromTagAndType, a, {
        tag: "",
        contentType: "",
        locale: bungieNetPlatform.platformSettings.currentLocale
      }, {
        contentType: "data-content-type",
        tag: "data-content-tag",
        locale: "data-content-locale"
      }, this)
    };
    a.fn.renderContent = function(f) {
      var e = a.extend({
        contentObject: null,
        templateType: "",
        isTypeAgnostic: false,
        itemRenderedCallback: function() {},
        renderCompleteCallback: function() {},
        traversalCompleteCallback: function() {},
        errorCallback: function() {},
        parents: [],
        transaction: new b,
        headOnly: false,
        renderAttributes: []
      }, f);
      return this.each(function() {
        var f = a(this),
            b = d(e, f);
        b.identifier = b.transaction.pushCall("renderContent");
        c(b, f);
        bungieNetPlatform.contentRenderer.renderContent(b)
      })
    };
    a.fn.renderContentList = function(f) {
      var e = a.extend({
        contentList: [],
        templateType: "",
        isTypeAgnostic: false,
        itemRenderedCallback: function() {},
        renderCompleteCallback: function() {},
        traversalCompleteCallback: function() {},
        errorCallback: function() {},
        parents: [],
        transaction: new b,
        headOnly: false,
        renderAttributes: []
      }, f);
      return this.each(function() {
        var f = a(this),
            b = d(e, f);
        b.identifier = b.transaction.pushCall("renderContentList");
        c(b, f);
        var g = {
          hasMore: false,
          query: {
            contentTypes: [],
            creationDate: 0,
            currentPage: 1,
            itemsPerPage: b.contentList.length,
            modifiedDate: 0,
            sortBy: 0,
            tag: ""
          },
          results: b.contentList,
          totalResults: b.contentList.length
        };
        bungieNetPlatform.contentRenderer.renderContentItemList(g, b)
      })
    };
    a.fn.renderContentFromAttributes = function(d) {
      var c = a.extend({
        templateType: "",
        locale: bungieNetPlatform.platformSettings.currentLocale,
        itemRenderedCallback: function() {},
        renderCompleteCallback: function() {},
        traversalCompleteCallback: function() {},
        errorCallback: function() {},
        parents: [],
        transaction: new b,
        headOnly: false,
        renderAttributes: []
      }, d);
      return this.each(function() {
        var b = a(this),
            d = "id";
        if (b.attr("data-render-command")) var d = b.attr("data-render-command");
        switch (d) {
        case "id":
          b.renderContentFromId(c);
          break;
        case "query":
          b.renderContentFromQuery(c)
        }
      })
    };
    a.fn.renderContentFromQuery = function(a) {
      e("renderContentFromQuery", bungieNetPlatform.contentRenderer.renderContentFromQuery, a, {
        contentTypes: [],
        tag: "",
        notTag: "",
        locale: bungieNetPlatform.platformSettings.currentLocale,
        itemsPerPage: 100,
        currentPage: 1,
        sortBy: Globals.ContentSortBy.CreationDate,
        creationDate: Globals.ContentDateRange.All,
        modifiedDate: Globals.ContentDateRange.All
      }, {
        contentTypes: "data-content-types",
        tag: "data-content-tag",
        notTag: "data-content-not-tag",
        locale: "data-content-locale",
        itemsPerPage: "data-content-items-per-page",
        currentPage: "data-content-current-page",
        sortBy: "data-content-sort-by"
      }, this)
    };
    a.fn.renderContentFromTagAndType = function(a) {
      e("renderContentFromTagAndType", bungieNetPlatform.contentRenderer.renderContentFromTagAndType, a, {
        contentType: "",
        tag: "",
        locale: bungieNetPlatform.platformSettings.currentLocale,
        itemsPerPage: 10,
        currentPage: 1
      }, {
        contentType: "data-content-type",
        tag: "data-content-tag",
        locale: "data-content-locale",
        itemsPerPage: "data-content-items-per-page",
        currentPage: "data-content-current-page"
      }, this)
    };
    a.fn.renderNewsContent = function(a) {
      e("renderNewsContent", bungieNetPlatform.contentRenderer.renderNewsContent, a, {
        contentTypes: "",
        newsType: "",
        locale: bungieNetPlatform.platformSettings.currentLocale,
        itemsPerPage: 10,
        currentPage: 1
      }, {
        contentType: "data-content-type",
        newsType: "data-content-news-type",
        locale: "data-content-locale",
        itemsPerPage: "data-content-items-per-page",
        currentPage: "data-content-current-page"
      }, this)
    };

    function e(h, k, j, g, e, i) {
      var f = a.extend({
        templateType: "",
        isTypeAgnostic: false,
        itemRenderedCallback: function() {},
        renderCompleteCallback: function() {},
        traversalCompleteCallback: function() {},
        errorCallback: function() {},
        parents: [],
        transaction: new b,
        headOnly: false,
        renderAttributes: []
      }, j);
      return i.each(function() {
        var j = a(this),
            b = d(f, j);
        b.query = a.extend(g, f.query);
        for (var i in g) if (typeof e[i] != "undefined") b.query[i] = j.attr(e[i]) ? j.attr(e[i]) : b.query[i];
        b.identifier = b.transaction.pushCall(h);
        c(b, j);
        k(b)
      })
    }
    function f(h, k, j, f, e, i) {
      var g = a.extend({
        templateType: "",
        isTypeAgnostic: false,
        itemRenderedCallback: function() {},
        renderCompleteCallback: function() {},
        traversalCompleteCallback: function() {},
        errorCallback: function() {},
        parents: [],
        transaction: new b,
        headOnly: false,
        renderAttributes: []
      }, j);
      return i.each(function() {
        var j = a(this),
            b = d(g, j);
        b = a.extend(f, b);
        for (var i in f) if (typeof e[i] != "undefined") b[i] = j.attr(e[i]) ? j.attr(e[i]) : b[i];
        b.identifier = b.transaction.pushCall(h);
        c(b, j);
        k(b)
      })
    }
  })(jQuery);
  var Cookies = {
    Path: "/",
    Domain: ServerVars.WebAuthCookieDomain,
    Set: function(b, a) {
      document.cookie = b + "=" + encodeURIComponent(a) + ";path=" + this.Path + ";domain=" + this.Domain
    },
    SetWithExpires: function(c, b, a) {
      document.cookie = c + "=" + encodeURIComponent(b) + ";path=" + this.Path + ";domain=" + this.Domain + ";expires=" + a.toUTCString()
    },
    Get: function(b) {
      var a = document.cookie.match(b + "=(.*?)(;|$)");
      return a ? decodeURIComponent(a[1]) : null
    },
    GetMulti: function(f, e) {
      var a = document.cookie.match(f + "=(.*?)(;|$)");
      if (a && a.length >= 1) for (var c = a[1].split("&"), b = 0; b < c.length; b++) {
        var d = c[b].split("=");
        if (d[0] == e) return decodeURIComponent(d[1])
      }
      return null
    },
    GetMultiDictionary: function(f) {
      var a = {},
          b = document.cookie.match(f + "=(.*?)(;|$)");
      if (b && b.length >= 1) for (var d = b[1].split("&"), c = 0; c < d.length; c++) {
        var e = d[c].split("=");
        a[e[0]] = e[1]
      }
      if (a == null) a = {};
      return a
    },
    SetMulti: function(d, b) {
      var a = "";
      for (var c in b) a += encodeURIComponent(c) + "=" + encodeURIComponent(b[c]) + "&";
      if (a.length > 0) a = a.substr(0, a.length - 1);
      document.cookie = d + "=" + a + ";path=" + this.Path + ";domain=" + this.Domain
    },
    SetMultiWithExpires: function(e, d, b) {
      var a = "";
      for (var c in b) a += encodeURIComponent(c) + "=" + encodeURIComponent(b[c]) + "&";
      if (a.length > 0) a = a.substr(0, a.length - 1);
      document.cookie = e + "=" + a + ";path=" + this.Path + ";domain=" + this.Domain + ";expires=" + d.toUTCString()
    },
    GetInMulti: function(c, b) {
      var a = Cookies.GetMultiDictionary(c);
      return a[b]
    },
    SetInMulti: function(b, d, c) {
      var a = Cookies.GetMultiDictionary(b);
      a[d] = c;
      Cookies.SetMulti(b, a)
    },
    SetInMultiWithExpires: function(b, e, c, d) {
      var a = Cookies.GetMultiDictionary(b);
      a[e] = c;
      Cookies.SetMultiWithExpires(b, d, a)
    },
    SetInMultiFromDictionary: function(c, a) {
      var b = Cookies.GetMultiDictionary(c);
      for (var d in a) b[d] = a[d];
      Cookies.SetMulti(c, b)
    },
    SetInMultiFromDictionaryWithExpires: function(c, e, a) {
      var b = Cookies.GetMultiDictionary(c);
      for (var d in a) b[d] = a[d];
      Cookies.SetMultiWithExpires(c, e, b)
    },
    Delete: function(b) {
      if (this.Get(b)) {
        var a = new Date;
        a.setTime(a.getTime() - 1);
        document.cookie = b + "=;path=" + this.Path + ";domain=" + this.Domain + ";expires=" + a.toUTCString()
      }
      return true
    }
  };

  bungieNetPlatform.dateUtility = {
    formatShortDate: function(a) {
      return a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear()
    },
    formatTime: function(a) {
      var c = a.getHours() % 12,
          b = a.getMinutes();
      return c + ":" + b
    },
    getAmPm: function(a) {
      return a.getHours() / 12 >= 1 ? "PM" : "AM"
    }
  };

  (function() {
    bungieNetPlatform.linkHelper = {
      linkRegex: new RegExp(/([\s\(\>]|^|>)((http|https)\:\/\/([^\s\<\[]*))((?=[\,\.\!\:\;\-\"\)]([\s\<]|$)))/gi),
      linkFineRegex: new RegExp(/([\s]|^|>)((http|https)\:\/\/([^\"\s\<]*))/gi),
      injectLinks: function(b) {
        var a = "";
        if (typeof b !== "undefined") {
          a = b.replace(bungieNetPlatform.linkHelper.linkRegex, '$1<a href="$2" rel="nofollow" class="externalLink">$2</a>');
          a = a.replace(bungieNetPlatform.linkHelper.linkFineRegex, '$1<a href="$2" rel="nofollow" class="externalLink">$2</a>')
        }
        return a
      }
    }
  })();

  (function() {
    bungieNetPlatform.tagHelper = {
      hashRegex: new RegExp(/(\#([a-zA-Z\u00C0-\u017F\u01FA-\u0217][a-zA-Z\u00C0-\u017F\u01FA-\u0217_0-9]{2,29}))(?!.*?\[\/(url|google)\])/gi),
      injectSpans: function(a) {
        return a.replace(bungieNetPlatform.tagHelper.hashRegex, '<span data-tag="$2">$1</span>')
      }
    }
  })();

  return bungieNetPlatform;
};


// Define custom things for JSDoc

/**
 * This callback gets called on success
 * @callback successCallback
 * @param {Object} responseData
 */

/**
 * This callback gets called on error
 * @callback errorCallback
 * @param {{errorCode: *, errorStatus: *, errorMessage: *, messageData: *, debug: *}} error - Contains all relevant error information
 */

/**
 * A jQuery deferred object
 * @typedef {Object} Deferred
 * @method Deferred.always
 * @method Deferred.done
 * @method Deferred.fail
 * @method Deferred.isRejected
 * @method Deferred.isResolved
 */

