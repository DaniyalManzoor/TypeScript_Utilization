"use strict";
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docEight = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
const docNine = {
    uid: 4,
    resourceType: ResourceType.AUTHOR,
    data: ["John", "mosh"],
};
