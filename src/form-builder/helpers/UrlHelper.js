export class UrlHelper {
  bahmniFormPublishUrl(uuid) {
    return `/openmrs/ws/rest/v1/bahmniie/form/publish?formUuid=${uuid}`;
  }

  getFullConceptRepresentation(conceptName) {
    return '/openmrs/ws/rest/v1/concept?' +
            `s=byFullySpecifiedName&locale=en&name=${conceptName}&v=bahmni`;
  }

  bahmniFormTranslateUrl(formName, formVersion, locale) {
    return '/openmrs/ws/rest/v1/bahmniie/form/translate?' +
      `formName=${formName}&formVersion=${formVersion}&locale=${locale}`;
  }
}
