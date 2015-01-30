var username = "XXXXX",
    password = "XXXXX",
    profile_id = "XXXXXXXXX",
    sandbox = false,
    version = 'v2',
    platform_username = 'test',
    module = require("nextcaller-nodejs-api"),
    data = {
        'email': 'test@test.com'
    },
    client = module.NextCallerPlatformClient(username, password, sandbox, version);
client.updateByProfileId(profile_id, data, platform_username, function (data, status_code) {
    console.log(data);
    console.log(status_code);
}, function (error, status_code) {
    console.log(error);
    console.log(status_code);
});