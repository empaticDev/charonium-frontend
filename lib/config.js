const getEnvironmentVariable = (environmentVariable) => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}
      Make sure you have an env file and the environment variable is set.`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  dbBearer: getEnvironmentVariable('DB_BEARER'),
  nextPublicStrapiApiUrl: getEnvironmentVariable('NEXT_PUBLIC_STRAPI_API_URL'),
  strapiPreviewSecret: getEnvironmentVariable('STRAPI_PREVIEW_SECRET')
};