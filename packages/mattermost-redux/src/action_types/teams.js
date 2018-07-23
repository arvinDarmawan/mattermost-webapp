// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow

import keyMirror from 'utils/key_mirror';

export default keyMirror({
    GET_TEAMS_REQUEST: null,
    GET_TEAMS_SUCCESS: null,
    GET_TEAMS_FAILURE: null,

    GET_TEAM_REQUEST: null,
    GET_TEAM_SUCCESS: null,
    GET_TEAM_FAILURE: null,

    MY_TEAMS_REQUEST: null,
    MY_TEAMS_SUCCESS: null,
    MY_TEAMS_FAILURE: null,

    CREATE_TEAM_REQUEST: null,
    CREATE_TEAM_SUCCESS: null,
    CREATE_TEAM_FAILURE: null,

    UPDATE_TEAM_REQUEST: null,
    UPDATE_TEAM_SUCCESS: null,
    UPDATE_TEAM_FAILURE: null,

    SET_TEAM_ICON_REQUEST: null,
    SET_TEAM_ICON_SUCCESS: null,
    SET_TEAM_ICON_FAILURE: null,

    REMOVE_TEAM_ICON_REQUEST: null,
    REMOVE_TEAM_ICON_SUCCESS: null,
    REMOVE_TEAM_ICON_FAILURE: null,

    MY_TEAM_MEMBERS_REQUEST: null,
    MY_TEAM_MEMBERS_SUCCESS: null,
    MY_TEAM_MEMBERS_FAILURE: null,

    GET_TEAM_MEMBERS_REQUEST: null,
    GET_TEAM_MEMBERS_SUCCESS: null,
    GET_TEAM_MEMBERS_FAILURE: null,

    MY_TEAM_UNREADS_REQUEST: null,
    MY_TEAM_UNREADS_SUCCESS: null,
    MY_TEAM_UNREADS_FAILURE: null,

    TEAM_MEMBERS_REQUEST: null,
    TEAM_MEMBERS_SUCCESS: null,
    TEAM_MEMBERS_FAILURE: null,

    TEAM_STATS_REQUEST: null,
    TEAM_STATS_SUCCESS: null,
    TEAM_STATS_FAILURE: null,

    ADD_TEAM_MEMBER_REQUEST: null,
    ADD_TEAM_MEMBER_SUCCESS: null,
    ADD_TEAM_MEMBER_FAILURE: null,

    REMOVE_TEAM_MEMBER_REQUEST: null,
    REMOVE_TEAM_MEMBER_SUCCESS: null,
    REMOVE_TEAM_MEMBER_FAILURE: null,

    UPDATE_TEAM_MEMBER_REQUEST: null,
    UPDATE_TEAM_MEMBER_SUCCESS: null,
    UPDATE_TEAM_MEMBER_FAILURE: null,

    TEAM_EMAIL_INVITE_REQUEST: null,
    TEAM_EMAIL_INVITE_SUCCESS: null,
    TEAM_EMAIL_INVITE_FAILURE: null,

    JOIN_TEAM_REQUEST: null,
    JOIN_TEAM_SUCCESS: null,
    JOIN_TEAM_FAILURE: null,

    DELETE_TEAM_REQUEST: null,
    DELETE_TEAM_SUCCESS: null,
    DELETE_TEAM_FAILURE: null,

    UPDATE_TEAM_SCHEME_REQUEST: null,
    UPDATE_TEAM_SCHEME_SUCCESS: null,
    UPDATE_TEAM_SCHEME_FAILURE: null,

    UPDATE_TEAM_MEMBER_SCHEME_ROLES_REQUEST: null,
    UPDATE_TEAM_MEMBER_SCHEME_ROLES_SUCCESS: null,
    UPDATE_TEAM_MEMBER_SCHEME_ROLES_FAILURE: null,

    CREATED_TEAM: null,
    SELECT_TEAM: null,
    UPDATED_TEAM: null,
    RECEIVED_TEAM: null,
    RECEIVED_TEAMS: null,
    RECEIVED_TEAM_DELETED: null,
    RECEIVED_TEAMS_LIST: null,
    RECEIVED_MY_TEAM_MEMBERS: null,
    RECEIVED_MY_TEAM_MEMBER: null,
    RECEIVED_TEAM_MEMBERS: null,
    RECEIVED_MEMBERS_IN_TEAM: null,
    RECEIVED_MEMBER_IN_TEAM: null,
    REMOVE_MEMBER_FROM_TEAM: null,
    RECEIVED_TEAM_STATS: null,
    RECEIVED_MY_TEAM_UNREADS: null,
    LEAVE_TEAM: null,
    UPDATED_TEAM_SCHEME: null,
    UPDATED_TEAM_MEMBER_SCHEME_ROLES: null,
});
