const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("jobseeker")
 .readOwn("profile")
 .updateOwn("profile")
 
ac.grant("employer")
 .readOwn("profile")
 .updateOwn("profile")
 
ac.grant("admin")
 .extend("jobseeker")
 .extend("employer")
 .updateAny("profile")
 .deleteAny("profile")
 
return ac;
})();
