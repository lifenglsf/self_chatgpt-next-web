import { useAccessStore } from "../store/access";
import { useAppConfig } from "../store/config";
import { collectModels } from "./model";

export function identifyDefaultClaudeModel(modelName: string) {
  const accessStore = useAccessStore.getState();
  const configStore = useAppConfig.getState();

  const allModals = collectModels(
    configStore.models,
    [configStore.customModels, accessStore.customModels].join(","),
  );

  const modelMeta = allModals.find((m) => m.name === modelName);

  return (
    modelName.startsWith("claude") &&
    modelMeta &&
    modelMeta.provider?.providerType === "anthropic"
  );
}
export function identifyDefaultBaiduModel(modelName: string) {
  const accessStore = useAccessStore.getState();
  const configStore = useAppConfig.getState();

  const allModals = collectModels(
    configStore.models,
    [configStore.customModels, accessStore.customModels].join(","),
  );

  const modelMeta = allModals.find((m) => m.name === modelName);

  return modelMeta && modelMeta.provider?.providerType === "baidu";
}
export function identifyDefaultDeepModel(modelName: string) {
  const accessStore = useAccessStore.getState();
  const configStore = useAppConfig.getState();

  const allModals = collectModels(
    configStore.models,
    [configStore.customModels, accessStore.customModels].join(","),
  );

  const modelMeta = allModals.find((m) => m.name === modelName);

  return modelMeta && modelMeta.provider?.providerType === "deep";
}
export function identifyDefaultSparkModel(modelName: string) {
  const accessStore = useAccessStore.getState();
  const configStore = useAppConfig.getState();

  const allModals = collectModels(
    configStore.models,
    [configStore.customModels, accessStore.customModels].join(","),
  );

  const modelMeta = allModals.find((m) => m.name === modelName);
  console.log("modelMeta", modelMeta);
  return modelMeta && modelMeta.provider?.providerType === "spark";
}
export function identifyDefaultAliModel(modelName: string) {
  const accessStore = useAccessStore.getState();
  const configStore = useAppConfig.getState();

  const allModals = collectModels(
    configStore.models,
    [configStore.customModels, accessStore.customModels].join(","),
  );

  const modelMeta = allModals.find((m) => m.name === modelName);

  return modelMeta && modelMeta.provider?.providerType === "ali";
}
